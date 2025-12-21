import React from 'react';

/**
 * Input component
 * @param {Object} props - Component props
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - The size of the input
 * @param {string} [props.className] - Additional classes for the input
 * @returns {import('react').JSX.Element} The input component
 */
function Input({ size = 'md', className = '', error, ...props }) {
  const sizeClasses = {
    xs: 'h-[24px] px-[16px]',
    sm: 'h-[30px] px-[16px]',
    md: 'h-[40px] px-[16px]',
    lg: 'h-[50px] px-[16px]',
    xl: 'h-[60px] px-[16px]',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const borderClass = error ? 'border-red-500 focus-visible:outline-red-500' : 'border-gray-300 focus-visible:outline-black';

  return (
    <div className="w-full">
      <input
        {...props}
        className={`border rounded-lg outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 block w-full ${sizeClass} ${borderClass} ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;
