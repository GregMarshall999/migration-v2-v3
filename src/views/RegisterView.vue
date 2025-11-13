<template>
    <AuthForm 
        v-model:identifiant.capitalize="formData.identifiant" 
        v-model:mdp="formData.mdp" 
        @submit="register"
    >
        Register
    </AuthForm>
</template>

<script setup>
import AuthForm from '@components/AuthForm.vue';
import { reactive } from 'vue';
import { useAuthStore } from '@stores/auth.store';

const authStore = useAuthStore();

const formData = reactive({
    identifiant: '',
    mdp: ''
});

const register = () => {
    console.log("Register");
    authStore.register(formData.identifiant, formData.mdp);
}
</script>