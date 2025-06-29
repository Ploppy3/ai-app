import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

/**
 * @typedef {Object} TodoFormData
 * @property {string} text
 */

/**
 * @returns {TodoFormData}
 */
export function getDefaultValues() {
    return {
        text: '',
    };
}

/**
 * Custom hook for handling the todo form.
 * @param {{addTodo: (text: string) => void}} props
 */
export function useTodoForm({ addTodo }) {
    const form = useForm({
        defaultValues: getDefaultValues(),
    });

    const onSubmit = useCallback(
        /**
         * @param {TodoFormData} data
         */
        (data) => {
            if (data.text.trim()) {
                addTodo(data.text.trim());
                form.reset();
            }
        },
        [addTodo, form]
    );

    const submit = form.handleSubmit(onSubmit);

    return { form, submit };
}
