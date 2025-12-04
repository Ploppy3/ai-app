import React from 'react';

/**
 * Textarea component
 * @param {Object} props - Component props
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - The size of the textarea (affects padding/font-size, height is controlled by rows or className)
 * @param {string} [props.className] - Additional classes for the textarea
 * @returns {import('react').JSX.Element} The textarea component
 */
function Textarea({ size = 'md', className = '', ...props }) {
    const sizeClasses = {
        xs: 'px-[16px] py-[4px]',
        sm: 'px-[16px] py-[6px]',
        md: 'px-[16px] py-[8px]',
        lg: 'px-[16px] py-[10px]',
        xl: 'px-[16px] py-[12px]',
    };

    const sizeClass = sizeClasses[size] || sizeClasses.md;

    return (
        <textarea
            {...props}
            className={`border border-gray-300 rounded-lg outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block w-full [field-sizing:content] ${sizeClass} ${className}`}
        />
    );
}

export default Textarea;
