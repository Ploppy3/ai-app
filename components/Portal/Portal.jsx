'use client';
import { createPortal } from 'react-dom';
import { usePortal } from '../../contexts/PortalContext';

/**
 * Portal component
 * @param {Object} props - Component props
 * @param {import('react').ReactNode} props.children - The content of the portal
 * @returns {import('react').ReactPortal | null} The portal component
 */
function Portal({ children }) {
  const { portalContainerRef } = usePortal();

  if (!portalContainerRef.current) {
    return null;
  }

  return createPortal(children, portalContainerRef.current);
}

export default Portal;