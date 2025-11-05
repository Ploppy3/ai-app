import React from 'react';

/**
 * Input component
 * @param {Object} props - Component props
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - The size of the input
 * @param {string} [props.className] - Additional classes for the input
 * @returns {import('react').JSX.Element} The input component
 */
function Input({ size = 'md', className = '', ...props }) {
  const sizeClasses = {
    xs: 'h-[24px] px-[16px]',
    sm: 'h-[30px] px-[16px]',
    md: 'h-[40px] px-[16px]',
    lg: 'h-[50px] px-[16px]',
    xl: 'h-[60px] px-[16px]',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <input
      {...props}
      className={`border border-gray-300 rounded-lg outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block w-full ${sizeClass} ${className}`}
    />
  );
}

export default Input;
