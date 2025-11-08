import { fetchUtils } from 'react-admin';
import { DataProvider, AuthProvider } from 'ra-core';

// This is just a fake placeholder for practice
export const dataProvider = {
    getList: (resource, params) => Promise.resolve({ data: [], total: 0 }),
    getOne: (resource, params) => Promise.resolve({ data: { id: params.id } }),
    create: (resource, params) => Promise.resolve({ data: params.data }),
    update: (resource, params) => Promise.resolve({ data: params.data }),
    delete: (resource, params) => Promise.resolve({ data: params.previousData }),
};

export const authProvider = {
    login: ({ username, password }) => Promise.resolve(),
    logout: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    checkError: (error) => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
};
