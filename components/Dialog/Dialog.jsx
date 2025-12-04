import React, { useState, useEffect } from 'react';
import Portal from '../Portal/Portal';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

/**
 * Dialog component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the dialog is open
 * @param {() => void} props.onClose - Callback when the dialog is closed
 * @param {import('react').ReactNode} props.children - The content of the dialog
 * @returns {import('react').JSX.Element | null} The dialog component
 */
function Dialog({ isOpen, onClose, children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && isMounted) {
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMounted]);

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
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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