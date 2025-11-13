<template>
    <nav>
        <RouterLink v-bind:to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
        <RouterLink :to="{ name: 'todos' }">Todos</RouterLink>
        <RouterLink v-if="!authStore.isAuthenticated" :to="{ name: 'login' }">Login</RouterLink>
        <RouterLink v-if="!authStore.isAuthenticated" :to="{ name: 'register' }">Register</RouterLink>
        <RouterLink v-else :to="{ name: 'home' }" @click="authStore.logout">Logout</RouterLink>
    </nav>
</template>

<script setup>
import { useAuthStore } from '@stores/auth.store';

const authStore = useAuthStore();
</script>