<template>
    <AuthForm :formData="formData" @submit="register">
        Register
    </AuthForm>
</template>

<script>
import AuthForm from '@components/AuthForm.vue';

export default {
    data() {
        return {
            formData: {
                identifiant: '',
                mdp: ''
            }
        }
    },
    components: {
        AuthForm
    },
    methods: {
        register(e) {
            console.log("Register", e);
        }
    }
}
</script>