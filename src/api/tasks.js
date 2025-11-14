import api from './axios';

export const tasksAPI = {
    async getTaskById(taskId) {
        const response = await api.get(`/tasks/${taskId}`);
        return response.data;
    },

    async getTasks(userId) {
        const response = await api.get('/tasks', {
            params: { userId }
        })
        return response.data;
    },

    async getLatestTasksFirst(userId) {
        const response = await api.get('/tasks', {
            params: { userId, _sort: 'createAt', _order: 'desc' }
        })
        return response.data;
    },

    async createTask(userId, task) {
        const response = await api.post('/tasks', {
            ...task,
            userId, 
            completed: false
        })
        return response.data;
    }, 
    async updateTask(taskId, task) {
        const existingTask = await this.getTaskById(taskId);

        const response = await api.put(`/tasks/${taskId}`, {
            ...existingTask,
            ...task
        });
        return response.data;
    }, 
    async deleteTask(taskId) {
        await api.delete(`/tasks/${taskId}`);
    }
}