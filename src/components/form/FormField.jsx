import { useController } from 'react-hook-form';
import Box from '../ui/Box';

/**
 * @typedef {object} RHFField
 * @property {string} name
 * @property {any} value
 * @property {(event: any) => void} onChange
 * @property {() => void} onBlur
 * @property {import('react').Ref<any>} ref
 */

/**
 * @callback RenderFieldCallback
 * @param {{field: RHFField, fieldState: import('react-hook-form').ControllerFieldState}} params
 * @returns {import('react').JSX.Element}
 */

/**
 * @template {import("react-hook-form").FieldValues} TFieldValues
 * @template {import("react-hook-form").FieldPath<TFieldValues>} TName
 * @typedef {object} FormFieldProps
 * @property {TName} name - The name of the field.
 * @property {string} [label] - The label for the field.
 * @property {RenderFieldCallback} render - The render prop function.
 * @property {import('react-hook-form').Control<TFieldValues>} control - The control object from react-hook-form.
 * @property {object} [rules] - Validation rules.
 */

/**
 * A component that connects a field to react-hook-form.
 * @template {import("react-hook-form").FieldValues} TFieldValues
 * @template {import("react-hook-form").FieldPath<TFieldValues>} TName
 * @param {FormFieldProps<TFieldValues, TName>} props - The component props.
 * @returns {import('react').JSX.Element} The rendered field.
 */
function FormField({ name, label, render, control, rules }) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <Box className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <Box className={label ? 'mt-1' : ''}>
        {render({ field, fieldState })}
      </Box>
      {fieldState.error && (
        <p className="mt-2 text-sm text-red-600">{fieldState.error.message}</p>
      )}
    </Box>
  );
}

export default FormField;
