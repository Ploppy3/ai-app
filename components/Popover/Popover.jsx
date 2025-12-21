'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
    useMergeRefs,
    FloatingPortal,
    FloatingFocusManager,
    useId,
    size,
    useTransitionStyles,
} from '@floating-ui/react';

const PopoverContext = createContext(null);

export const usePopover = () => {
    const context = useContext(PopoverContext);
    if (context == null) {
        throw new Error('Popover components must be wrapped in <Popover />');
    }
    return context;
};

/**
 * @typedef {Object} PopoverProps
 * @property {import('react').ReactNode} children - The content of the popover
 * @property {boolean} [isOpen] - Controlled open state
 * @property {() => void} [onClose] - Callback when popover closes
 * @property {import('@floating-ui/react').Placement} [placement='bottom'] - Placement of the popover
 * @property {boolean} [modal=false] - Whether the popover is modal (traps focus)
 * @property {number} [initialFocus=0] - Initial focus index
 * @property {boolean} [matchWidth=false] - Whether to match the width of the trigger
 */

/**
 * Popover Root Component
 * @param {PopoverProps} props
 */
export function Popover({
    children,
    isOpen: controlledIsOpen,
    onClose: controlledOnClose,
    placement = 'bottom',
    modal = false,
    initialFocus = 0,
    matchWidth = false,
    ...restOptions
}) {
    // Use controlled state if provided (useDisclosure integration), otherwise internal state
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);

    const isControlled = controlledIsOpen !== undefined;
    const open = isControlled ? controlledIsOpen : uncontrolledIsOpen;

    const setOpen = (newOpen) => {
        if (!isControlled) {
            setUncontrolledIsOpen(newOpen);
        }
        if (controlledOnClose && !newOpen) {
            controlledOnClose();
        }
        // If we wanted to support onOpen, we'd call it here for newOpen === true
    };

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                fallbackAxisSideDirection: 'end',
                padding: 5,
            }),
            shift({ padding: 5 }),
            matchWidth && size({
                apply({ elements, rects }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                    });
                },
            }),
        ],
        ...restOptions,
    });

    const context = data.context;

    const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
        initial: {
            opacity: 0,
            transform: 'scale(0.95)',
        },
        open: {
            opacity: 1,
            transform: 'scale(1)',
        },
        close: {
            opacity: 0,
            transform: 'scale(0.95)',
        },
        duration: 150,
    });

    const click = useClick(context, {
        enabled: true // Always enabled for popover trigger
    });

    const dismiss = useDismiss(context);
    const role = useRole(context);

    const interactions = useInteractions([
        click,
        dismiss,
        role,
    ]);

    const value = useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            modal,
            initialFocus,
            isMounted,
            transitionStyles,
        }),
        [open, setOpen, interactions, data, modal, initialFocus, isMounted, transitionStyles]
    );

    return (
        <PopoverContext.Provider value={value}>
            {children}
        </PopoverContext.Provider>
    );
}

/**
 * @typedef {Object} PopoverTriggerProps
 * @property {import('react').ReactNode} children - The trigger element
 * @property {boolean} [asChild=false] - Whether to merge props into the child element
 */

/**
 * Popover Trigger Component
 * @type {React.ForwardRefExoticComponent<PopoverTriggerProps & React.RefAttributes<HTMLElement>>}
 */
export const PopoverTrigger = React.forwardRef(function PopoverTrigger(
    { children, asChild = false, ...props },
    propRef
) {
    const context = usePopover();
    const childrenRef = children.ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // If used as a direct wrapper without asChild, we might need to wrap in a span
    // But typically PopoverTrigger wraps an interactive element.
    // We clone the element to attach refs and handlers.

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...children.props,
                'data-state': context.open ? 'open' : 'closed',
            })
        );
    }

    // Fallback if not using asChild (though convention often suggests single child)
    // For now, let's assume it wraps a single interactive child
    return React.cloneElement(
        children,
        context.getReferenceProps({
            ref,
            ...props,
            ...children.props,
            'data-state': context.open ? 'open' : 'closed',
        })
    );
});

/**
 * @typedef {Object} PopoverContentProps
 * @property {import('react').CSSProperties} [style] - Inline styles
 * @property {string} [className] - CSS class name
 * @property {import('react').ReactNode} children - Content elements
 */

/**
 * Popover Content Component
 * @type {React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>}
 */
export const PopoverContent = React.forwardRef(function PopoverContent(
    { style, className, children, ...props },
    propRef
) {
    const { context: floatingContext, ...context } = usePopover();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    const id = useId();

    if (!context.isMounted) return null;

    return (
        <FloatingPortal>
            <FloatingFocusManager context={floatingContext} modal={context.modal} initialFocus={context.initialFocus}>
                <div
                    ref={ref}
                    style={{
                        ...context.floatingStyles,
                        zIndex: 50,
                        outline: 'none',
                    }}
                    {...context.getFloatingProps(props)}
                >
                    <div
                        style={{
                            ...style,
                            ...context.transitionStyles,
                        }}
                        className={`bg-white rounded-lg shadow-lg border border-gray-200 outline-none text-sm text-gray-900 ${className || ''}`}
                        aria-labelledby={id}
                    >
                        {children}
                    </div>
                </div>
            </FloatingFocusManager>
        </FloatingPortal>
    );
});

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

/**
 * @typedef {Object} PopoverCloseButtonProps
 * @property {string} [className] - CSS class name
 * @property {() => void} [onClick] - Click handler
 */

/**
 * Popover Close Button Component
 * @type {React.ForwardRefExoticComponent<PopoverCloseButtonProps & React.RefAttributes<HTMLButtonElement>>}
 */
export const PopoverCloseButton = React.forwardRef(function PopoverCloseButton({ className, ...props }, ref) {
    const { setOpen } = usePopover();
    return (
        <Button
            ref={ref}
            onClick={(e) => {
                props.onClick?.(e);
                setOpen(false);
            }}
            variant="ghost"
            size="sm"
            className={`absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 ${className || ''}`}
            {...props}
        >
            <Icon name="close" className="text-xl" />
        </Button>
    );
});
