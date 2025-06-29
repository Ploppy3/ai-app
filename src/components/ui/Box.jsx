/**
 * A reusable box component that acts as a replacement for the div element.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the box.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {import('react').JSX.Element} The box component.
 */
const Box = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export default Box;
