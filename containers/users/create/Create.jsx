'use client';
import React from 'react';
import { useUsersCreate } from './useCreate';
import UsersCreateForm from './Form';

/**
 * User creation container
 * @returns {import('react').JSX.Element}
 */
const UsersCreate = () => {
    const { form, onSubmit } = useUsersCreate();

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Create New User</h2>
            <UsersCreateForm form={form} onSubmit={onSubmit} />
        </div>
    );
};

export default UsersCreate;
