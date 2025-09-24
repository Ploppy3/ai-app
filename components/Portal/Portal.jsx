import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Portal component
 * @param {Object} props - Component props
 * @param {import('react').ReactNode} props.children - The content of the portal
 * @returns {import('react').ReactPortal | null} The portal component
 */
function Portal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const portalRoot = document.body;
    portalRoot.appendChild(elRef.current);
    return () => {
      portalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(children, elRef.current);
}

export default Portal;
