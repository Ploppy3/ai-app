import { z } from 'zod';

export const usersCreateSchema = z.object({
    firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.email('Invalid email address'),
});
