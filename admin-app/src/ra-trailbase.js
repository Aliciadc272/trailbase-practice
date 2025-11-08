import { users } from './resources/users';
import { posts } from './resources/posts';

export const dataProvider = {
  getList: (resource) => {
    if (resource === 'users') return Promise.resolve({ data: users, total: users.length });
    if (resource === 'posts') return Promise.resolve({ data: posts, total: posts.length });
    return Promise.resolve({ data: [], total: 0 });
  },
  getOne: (resource, params) => {
    const data = resource === 'users' ? users : posts;
    return Promise.resolve({ data: data.find(item => item.id === params.id) });
  },
  create: (resource, params) => Promise.resolve({ data: params.data }),
  update: (resource, params) => Promise.resolve({ data: params.data }),
  delete: (resource, params) => Promise.resolve({ data: params.previousData }),
};

export const authProvider = {
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkAuth: () => Promise.resolve(),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

