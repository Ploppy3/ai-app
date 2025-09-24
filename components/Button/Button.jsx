/**
 * Button component
 * @param {Object} props - Component props
 * @param {import('react').ReactNode} props.children - The content of the button
 * @param {'primary' | 'gray'} [props.colorPalette='gray'] - The color palette of the button
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - The size of the button
 * @param {'flat' | 'outline'} [props.variant='flat'] - The variant of the button
 * @param {string} [props.className] - Additional classes for the button
 * @returns {import('react').JSX.Element} The button component
 */
function Button({ children, colorPalette = 'gray', size = 'md', variant = 'flat', className = '' }) {
  const paletteClasses = {
    primary: {
      flat: 'bg-primary-600 hover:bg-primary-500 active:bg-primary-500 text-white',
      outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600/10 active:bg-primary-500',
    },
    gray: {
      flat: 'bg-gray-600 hover:bg-gray-500 active:bg-gray-500 text-white',
      outline: 'bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-600/10 active:bg-gray-500',
    },
  };

  const sizeClasses = {
    xs: 'h-[20px] px-[7px]',
    sm: 'h-[30px] px-[10px]',
    md: 'h-[40px] px-[13px]',
    lg: 'h-[50px] px-[17px]',
    xl: 'h-[60px] px-[20px]',
  };

  const buttonClasses = paletteClasses[colorPalette][variant];
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <button className={`cursor-pointer rounded-lg transition-all duration-200 whitespace-nowrap ${buttonClasses} ${sizeClass} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
