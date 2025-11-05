'use client';
import React, { createContext, useContext, useRef, useEffect } from 'react';

/**
 * @typedef {Object} PortalContextType
 * @property {React.RefObject<HTMLElement>} portalContainerRef
 */

/**
 * @type {import('react').Context<PortalContextType>}
 */
const PortalContext = createContext(null);

/**
 * Custom hook to use the Portal context
 * @returns {PortalContextType}
 */
export function usePortal() {
  return useContext(PortalContext);
}

/**
 * PortalProvider component
 * @param {Object} props - Component props
 * @param {import('react').ReactNode} props.children - The content of the provider
 * @returns {import('react').JSX.Element} The PortalProvider component
 */
export function PortalProvider({ children }) {
  const portalContainerRef = useRef(null);

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');
    portalContainerRef.current = portalRoot;
  }, []);

  return (
    <PortalContext.Provider value={{ portalContainerRef }}>
      {children}
    </PortalContext.Provider>
  );
}