'use client';
import { useState } from 'react';

/**
 * @typedef {Object} Disclosure
 * @property {boolean} isOpen - Whether the disclosure is open
 * @property {function} open - Function to open the disclosure
 * @property {function} close - Function to close the disclosure
 */

/**
 * Custom hook to manage disclosure state
 * @param {boolean} [initialState=false] - The initial state of the disclosure
 * @returns {Disclosure}
 */
export function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => {setIsOpen(true);};
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
}