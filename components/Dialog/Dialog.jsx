import React, { useState, useEffect } from 'react';
import Portal from '../Portal/Portal';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

/**
 * Dialog component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the dialog is open
 * @param {function} props.onClose - Callback when the dialog is closed
 * @param {import('react').ReactNode} props.children - The content of the dialog
 * @returns {import('react').JSX.Element | null} The dialog component
 */
function Dialog({ isOpen, onClose, children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [animationClass, setAnimationClass] = useState('opacity-0');

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setAnimationClass('opacity-0');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setAnimationClass('animate-fade-in');
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const onTransitionEnd = () => {
    if (!isOpen) {
      setIsMounted(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${animationClass}`}
        onClick={onClose}
        onTransitionEnd={onTransitionEnd}
      >
        <div className="bg-white rounded-lg p-8 relative" onClick={(e) => e.stopPropagation()}>
          <Button onClick={onClose} className="absolute top-0 right-0" title="Close dialog" variant="ghost" colorPalette="gray" size="sm">
            <Icon name="close" />
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Dialog;