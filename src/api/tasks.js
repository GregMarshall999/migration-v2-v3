import api from './axios';

export const tasksAPI = {
    async getTasks(userId) {
        const response = await api.get('/tasks', {
            params: { userId }
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
        const response = await api.put(`/tasks/${taskId}`, task);
        return response.data;
    }, 
    async deleteTask(taskId) {
        await api.delete(`/tasks/${taskId}`);
    }
}