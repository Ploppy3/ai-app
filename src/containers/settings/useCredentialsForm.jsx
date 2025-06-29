import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

/**
 * @typedef {Object} CredentialsFormData
 * @property {string} apiKey
 */

/**
 * @returns {CredentialsFormData}
 */
export function getDefaultValues() {
    return {
        apiKey: '',
    };
}

/**
 * Custom hook for handling the credentials form.
 */
export function useCredentialsForm() {
    const form = useForm({
        defaultValues: getDefaultValues(),
    });

    const onSubmit = useCallback(
        /**
         * @param {CredentialsFormData} data
         */
        (data) => {
            // Handle form submission logic here
            console.log({ data })
        },
        []
    );

    const submit = form.handleSubmit(onSubmit);

    return { form, submit };
}
