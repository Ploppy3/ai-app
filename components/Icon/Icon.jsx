import React from 'react';

/**
 * Icon component for Material Symbols
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the Material Symbol icon (e.g., 'close', 'menu')
 * @param {string} [props.className] - Additional CSS classes to apply to the icon
 * @param {(event: import('react').MouseEvent) => void} [props.onClick] - Optional click handler for the icon
 * @returns {import('react').JSX.Element} The Icon component
 */
function Icon({ name, className = '', onClick }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      onClick={onClick}
      aria-hidden={onClick ? undefined : "true"}
      role={onClick ? "button" : undefined}
    >
      {name}
    </span>
  );
}

export default Icon;
