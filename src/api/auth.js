import api from './axios';

export const authAPI = {
    async register(identifiant, password) {
        const checkResponse =await api.get('/users', {
            params: { identifiant }
        })

        if(checkResponse.data.length > 0) {
            throw new Error('Identifiant déjà utilisé');
        }

        const response = await api.post('/users', {
            identifiant, 
            password
        })

        const user = response.data;
        const token = btoa(`${identifiant}:${password}`);

        return { user, token };
    },

    async login(identifiant, password) {
        const response = await api.get('/users', {
            params: { identifiant, password }
        })

        if(response.data.length === 0) {
            throw new Error('Identifiant ou mot de passe incorrect');
        }

        const user = response.data[0];
        const token = btoa(`${identifiant}:${password}`);

        return { user, token };
    }
}