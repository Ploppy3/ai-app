import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import FormController from '../../../components/Form/FormController';

/**
 * User creation form component
 * @param {Object} props - Component props
 * @param {import('react-hook-form').UseFormReturn} props.form - The form object returned by useForm
 * @param {(data: Object) => void} props.onSubmit - Callback when the form is submitted
 * @returns {import('react').JSX.Element}
 */
const UsersCreateForm = ({ form, onSubmit }) => {
    const { control, handleSubmit } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormController name="firstName" control={control}>
                {(field) => (
                    <Input
                        {...field}
                        label="First Name"
                        placeholder="Enter first name"
                    />
                )}
            </FormController>

            <FormController name="lastName" control={control}>
                {(field) => (
                    <Input
                        {...field}
                        label="Last Name"
                        placeholder="Enter last name"
                    />
                )}
            </FormController>

            <FormController name="email" control={control}>
                {(field) => (
                    <Input
                        {...field}
                        type="email"
                        label="Email"
                        placeholder="Enter email address"
                    />
                )}
            </FormController>

            <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline">Cancel</Button>
                <Button type="submit">Create User</Button>
            </div>
        </form>
    );
};

export default UsersCreateForm;
