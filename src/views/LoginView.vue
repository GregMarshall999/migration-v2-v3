<template>
    <AuthForm 
        @submit="login"
        v-model:identifiant.capitalize="formData.identifiant"
        v-model:mdp="formData.mdp"
    >
        Login
    </AuthForm>

    {{ formData }}
</template>

<script setup>
import AuthForm from '@components/AuthForm.vue';
import { reactive } from 'vue';
import { useAuthStore } from '@stores/auth.store';

const authStore = useAuthStore();

const formData = reactive({
    identifiant: '',
    mdp: '', 
    //test: ''
});

//formData.identifiant = "test"

function login() {
    console.log("Login", formData);
    authStore.login(formData.identifiant, formData.mdp);
}
</script>