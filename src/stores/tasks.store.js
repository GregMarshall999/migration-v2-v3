import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { tasksAPI } from '@api/tasks';

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const completedTasks = computed(() => tasks.value.filter(task => task.completed));
    const pendingTasks = computed(() => tasks.value.filter(task => !task.completed));
    const getTasks = computed(() => tasks.value);
    const totalTasks = computed(() => tasks.value.length);

    const fetchTasks = async userId => {
        loading.value = true;
        error.value = null;

        try {
            const t = await tasksAPI.getLatestTasksFirst(userId);
            tasks.value = t;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    const addTask = async (userId, task) => {
        loading.value = true;
        error.value = null;

        try {
            const newTask = await tasksAPI.createTask(userId, task);
            tasks.value.push(newTask);
            return { success: true };
        } catch (err) {
            error.value = err.message;
            return { success: false, error: err.message };
        } finally {
            loading.value = false;
        }
    }

    const removeTask = async taskId => {
        error.value = null;

        try {
            await tasksAPI.deleteTask(taskId);
            tasks.value = tasks.value.filter(task => task.id !== taskId);
        } catch (err) {
            error.value = err.message;
            return { success: false, error: err.message };
        }
    }

    const updateTask = async (taskId, task) => {
        loading.value = true;
        error.value = null;

        try {
            const updatedTask = await tasksAPI.updateTask(taskId, task);
            tasks.value = tasks.value.map(t => t.id === taskId ? updatedTask : t);
            return { success: true };
        } catch (err) {
            error.value = err.message;
            return { success: false, error: err.message };
        } finally {
            loading.value = false;
        }
    }

    return { completedTasks, pendingTasks, totalTasks, getTasks, fetchTasks, addTask, removeTask, updateTask }
})