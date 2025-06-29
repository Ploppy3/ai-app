/**
 * @typedef {import('./FormField').RHFField} RHFField
 */

/**
 * A reusable input component that can be used with FormField.
 * @param {Object} props - Component props.
 * @param {RHFField} props.field - The field object from react-hook-form.
 * @param {string} props.type - The type of the input.
 * @param {string} [props.placeholder] - The placeholder text.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {import('react').JSX.Element} The input component.
 */
export const Input = ({ field, type, placeholder, className = '' }) => {
  return (
    <input
      {...field}
      type={type}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 ${className}`}
    />
  );
};
