import { useForm } from 'react-hook-form';
import { usersCreateGetDefaultValues } from './getDefaultValues';

import { zodResolver } from '@hookform/resolvers/zod';
import { usersCreateSchema } from './schema';

/**
 * Hook to handle user creation logic
 * @returns {Object} The hook values
 */
export const useUsersCreate = () => {
    const form = useForm({
        defaultValues: usersCreateGetDefaultValues(),
        resolver: zodResolver(usersCreateSchema),
    });

    const onSubmit = (data) => {
        console.log('Creating user:', data);
        // TODO: Implement actual user creation logic here
    };

    return {
        form,
        onSubmit,
    };
};
