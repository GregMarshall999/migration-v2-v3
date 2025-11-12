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

<script>
var id = 1;

export default {
    data() {
        return {
            tasks: [{
                id: id++, 
                name: 'Tâche 1', 
                completed: false
            },
            {
                id: id++, 
                name: 'Tâche 2', 
                completed: false
            } 
            ], 
            newTask: '',
            error: false
        }
    },
    methods: {
        deleteTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        }, 
        addTask() {
            if(this.newTask.length === 0) {
                this.error = true;
                return;
            }

            this.tasks = [{
                id: id++, 
                name: this.newTask, 
                completed: false
            }, ...this.tasks]
            this.newTask = '';
        }
    },
    computed: {
        isTasksEmpty() {
            return this.tasks.length === 0;
        }
    },
    watch: {
        error(val, _) {
            if(val) {
                setTimeout(() => {
                    this.error = false;
                }, 3000);
            }
        }
    },
    mounted() {
        var test = null;

        console.log(test === undefined);
        console.log(undefined === null);
    }
}

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