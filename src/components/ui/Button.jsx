/**
 * A reusable button component.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The button content.
 * @param {() => void} [props.onClick] - The function to call when the button is clicked.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The button type.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {'blue' | 'green' | 'red' | 'indigo'} [props.colorPalette='blue'] - The color palette for the button.
 * @returns {import('react').JSX.Element} The button component.
 */
const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  colorPalette = 'blue',
}) => {
  const colorStyles = {
    blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
    green: 'bg-green-500 hover:bg-green-600 focus:ring-green-500',
    red: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
    indigo: 'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500',
  };

  const selectedColor = colorStyles[colorPalette] || colorStyles.blue;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-white font-bold py-2 px-4 rounded whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedColor} ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
