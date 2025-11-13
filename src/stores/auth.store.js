import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { authAPI } from '@api/auth';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const token = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const isAuthenticated = computed(() => !!token.value && !!user.value);
    const getUserId = computed(() => user.value.id);

    const router = useRouter();

    const initisalizeAuth = () => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if(token && user) {
            user.value = JSON.parse(storedUser);
            token.value = storedToken;
        }
    }

    const register = async (identifiant, password) => {
        loading.value = true;
        error.value = null;

        try {
            const { user: usr, token: tkn } = await authAPI.register(identifiant, password);
            
            user.value = usr;
            token.value = tkn;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            router.push({ name: 'todos' });

            return { success: true };
        } catch (err) {
            error.value = err.message;
            return { success: false, error: err.message };
        } finally {
            loading.value = false;
        }
    }

    const login = async (identifiant, password) => {
        loading.value = true;
        error.value = null;
        
        try {
            const { user: usr, token: tkn } = await authAPI.login(identifiant, password);
            
            user.value = usr;
            token.value = tkn;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            router.push({ name: 'todos' });

            return { success: true };
        } catch (err) {
            error.value = err.message;
            return { success: false, error: err.message };
        } finally {
            loading.value = false;
        }
    }

    const logout = () => {
        user.value = null;
        token.value = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return { isAuthenticated, getUserId, login, logout, register }
})