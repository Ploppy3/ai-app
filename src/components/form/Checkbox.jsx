import Box from "../ui/Box";

/**
 * @typedef {import('./FormField').RHFField} RHFField
 */

/**
 * A reusable checkbox component that can be used with FormField.
 * It is designed to work with boolean values.
 * @param {Object} props - Component props.
 * @param {RHFField} props.field - The field object from react-hook-form.
 * @param {string} props.label - The label for the checkbox.
 * @returns {import('react').JSX.Element} The checkbox component.
 */
export const Checkbox = ({ field, label }) => {
  return (
    <Box className="flex items-center">
      <input
        {...field}
        id={field.name}
        type="checkbox"
        checked={!!field.value}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label htmlFor={field.name} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </Box>
  );
};
