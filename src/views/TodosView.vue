<template>
    <LazyToast v-if="error">Veuillez entrer une valeur</LazyToast>
    <div class="content">
        <h1>Mes Tâches</h1>

        <input 
            type="text" 
            v-model="newTask" 
            placeholder="Entrez une nouvelle tâche"
            @keyup.enter="addTask"
        />

        <ul v-if="!isTasksEmpty">
            <li 
                v-for="task in tasks" 
                :key="task.id"
                @click="deleteTask(task.id)"
            >
                {{ task.name }}
            </li>
        </ul>
        <p v-else>La liste de tâches est vide</p>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeMount, onBeforeUnmount } from 'vue';

const error = ref(false);
const stopErrorWatch = watch(error, newError => {
    if(newError) {
        setTimeout(() => {
            error.value = false;
        }, 3000);
    }
})

const newTask = ref('');
let id = 1;
const tasks = ref([
    {
        id: id++, 
        name: 'Tâche 1', 
        completed: false
    },
    {
        id: id++, 
        name: 'Tâche 2', 
        completed: false
    }
]);
const isTasksEmpty = computed(() => tasks.value.length === 0);

const deleteTask = taskId => {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
}

const addTask = () => {
    if(newTask.value.length === 0) {
        error.value = true;
        return;
    }

    tasks.value = [{
        id: id++, 
        name: newTask.value, 
        completed: false
    }, ...tasks.value]
    newTask.value = '';
}

onMounted(() => {
    console.log("mounted");

    var test = null;

    console.log(test === undefined);
    console.log(undefined === null);
})

onBeforeMount(() => {
    console.log("beforeMount");
})

onBeforeUnmount(() => {
    stopErrorWatch();
})

</script>

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
}

input {
    width: 40%;
    height: 3em;
    border-radius: 0.5em;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    border: 2px solid #ccc;
    border-radius: 1em;
    padding: 1em 4em;

    &:hover {
        cursor: pointer;
        background-color: #f0f0f0;
    }
}

</style>