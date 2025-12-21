import RouterLink from '../RouterLink/RouterLink';

/**
 * Button component
 * @param {Object} props - Component props
 * @param {import('react').ReactNode} props.children - The content of the button
 * @param {'primary' | 'gray'} [props.colorPalette='gray'] - The color palette of the button
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - The size of the button
 * @param {'flat' | 'outline' | 'ghost'} [props.variant='flat'] - The variant of the button
 * @param {string} [props.className] - Additional classes for the button
 * @param {string | import('url').UrlObject} [props.href] - Optional URL to navigate to. If provided, renders a RouterLink
 * @returns {import('react').JSX.Element} The button component
 */
function Button({ children, colorPalette = 'gray', size = 'md', variant = 'flat', className = '', href, ...props }) {
  const paletteClasses = {
    primary: {
      flat: 'bg-primary-600 hover:bg-primary-500 active:bg-primary-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
      outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600/10 active:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
      ghost: 'bg-transparent text-primary-600 hover:bg-primary-600/10 active:bg-primary-600/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
    },
    gray: {
      flat: 'bg-gray-600 hover:bg-gray-500 active:bg-gray-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
      outline: 'bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-600/10 active:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
      ghost: 'bg-transparent text-gray-600 hover:bg-gray-600/10 active:bg-gray-600/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
    },
  };

  const sizeClasses = {
    xs: 'h-[24px] px-[7px]',
    sm: 'h-[30px] px-[10px]',
    md: 'h-[40px] px-[13px]',
    lg: 'h-[50px] px-[17px]',
    xl: 'h-[60px] px-[20px]',
  };

  const buttonClasses = paletteClasses[colorPalette][variant];
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const classes = `cursor-pointer inline-flex items-center rounded-lg transition-[background-color,border-color,color] duration-200 whitespace-nowrap ${buttonClasses} ${sizeClass} ${className}`;

  if (href) {
    return (
      <RouterLink href={href} className={classes} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

export default Button;
