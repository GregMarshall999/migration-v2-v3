<template>
    <form @submit.prevent="$emit('submit', formData)" v-if="formData">
        <div class="form-group">
            <label>Identifiant</label>
            <input 
                type="text" 
                name="identifiant" 
                v-model="formData.identifiant"
                placeholder="JDoe" 
            />
        </div>

        <div class="form-group">
            <label>Mot de passe</label>
            <input 
                type="password" 
                name="identifiant" 
                v-model="formData.mdp"
                placeholder="********" 
            />
        </div>
        
        <button type="submit"><slot>Submit</slot></button>
    </form>
</template>

<script>

export default {
    props: ['formData'],
    emits: ['submit']
}

</script>

<style scoped>

form {
    border: 1px solid #ccc;
    width: fit-content;
    padding: 1em;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;

    .form-group {
        display: flex;
        gap: 0.5em;
    }

    button {
        width: fit-content;
    }
}

</style>