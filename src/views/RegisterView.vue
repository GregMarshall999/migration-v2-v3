<template>
    <AuthForm :formData="formData" @submit="register">
        Register
    </AuthForm>
</template>

<script setup>
import AuthForm from '@components/AuthForm.vue';
import { reactive } from 'vue';

const formData = reactive({
    identifiant: '',
    mdp: ''
});

const register = e => {
    console.log("Register", e);
}
</script>