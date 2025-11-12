<template>
    <AuthForm :formData="formData" @submit="login">
        Login
    </AuthForm>
</template>

<script setup>
import AuthForm from '@components/AuthForm.vue';
import { reactive } from 'vue';

const formData = reactive({
    identifiant: '',
    mdp: '', 
    test: ''
});

formData.identifiant = "test"

function login() {
    console.log("Login", formData.identifiant);
}
</script>