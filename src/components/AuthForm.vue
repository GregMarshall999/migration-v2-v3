<template>
    <form @submit.prevent="sendData">  
        <div class="form-group">
            <label>Identifiant</label>
            <input 
                type="text" 
                name="identifiant" 
                v-model="username"
                placeholder="JDoe" 
            />
        </div>

        <div class="form-group">
            <label>Mot de passe</label>
            <input 
                type="password" 
                name="identifiant" 
                v-model="password"
                placeholder="********" 
            />
        </div>
        
        <button type="submit"><slot>Submit</slot></button>
    </form>
</template>

<script setup>
//TODO attempt composable factorisation
const [username, modfiers] = defineModel('identifiant', {
    get(value) {
        if(modfiers.capitalize) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
            username.value = value;
        }
        return value;
    },
    set(value) {
        if(modfiers.capitalize) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
});

const password = defineModel('mdp');

//TODO: change to model
//const props = defineProps({
//    formData: {
//        type: Object, 
//        required: true
//    }
//});

const emits = defineEmits(['submit']);

function sendData() {
    emits('submit');
}

//console.log(props.formData);
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