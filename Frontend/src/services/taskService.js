import { api } from '../config/axios';

export const taskService = {
  getAll: async () => {
    return await api.get('/tasks');
  },
  post: async (task) => {
    return await api.post('/tasks', task);
  },
  delete: async (id) => {
    return await api.delete(`/tasks/${id}`);
  },
};
