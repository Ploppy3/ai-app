import { useController } from 'react-hook-form';

/**
 * FormController component
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the field
 * @param {import('react-hook-form').Control} props.control - The form control object
 * @param {(field: import('react-hook-form').ControllerRenderProps) => React.ReactNode} props.children - Render function that receives the field object
 * @returns {import('react').JSX.Element}
 */
const FormController = ({ name, control, children }) => {
    const { field, fieldState } = useController({
        name,
        control,
    });

    return children({ ...field, error: fieldState.error });
};

export default FormController;
