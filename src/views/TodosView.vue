<template>
    <LazyToast v-if="error">Veuillez entrer une valeur</LazyToast>
    <div class="content">
        <h1>Mes Tâches</h1>

        <input 
            type="text" 
            v-model="newTask" 
            placeholder="Entrez une nouvelle tâche"
            @keyup.enter="addTask"
            class="task-input"
        />

        <div>
            <p>Total de tâches: {{ tasksStore.totalTasks }}</p>
            <p>Tâches complétées: {{ tasksStore.completedTasks.length }}</p>
            <p>Tâches en attente: {{ tasksStore.pendingTasks.length }}</p>
        </div>

        <ul v-if="!isTasksEmpty">
            <TaskComp 
                v-for="task in tasks" 
                :key="task.id" 
                :task-id="task.id" 
                v-model="task.completed"
            >
                <template #task-name>
                    {{ task.name }}
                </template>
            </TaskComp>
            
            <!-- remplacé par le composant TaskComp
            <li 
                v-for="task in tasks" 
                :key="task.id"
            >
                <p @click="deleteTask(task.id)">{{ task.name }}</p>
                <input type="checkbox" v-model="task.completed" @change="toggleCompleted(task.id, task.completed)" />
            </li>
            -->
        </ul>
        <p v-else>La liste de tâches est vide</p>

        <p>X: {{ x }}</p>
        <p>Y: {{ y }}</p>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
import { useTasksStore } from '@stores/tasks.store';
import { useAuthStore } from '@stores/auth.store';
import { storeToRefs } from 'pinia';
import useMouse from '@composables/mouse';
import TaskComp from '@components/TaskComp.vue';

const tasksStore = useTasksStore();
const { getUserId } = storeToRefs(useAuthStore());

const error = ref(false);
const stopErrorWatch = watch(error, newError => {
    if(newError) {
        setTimeout(() => {
            error.value = false;
        }, 3000);
    }
})

const newTask = ref('');
const tasks = computed(() => tasksStore.getTasks);
const isTasksEmpty = computed(() => tasks.value.length === 0);

const deleteTask = taskId => {
    tasksStore.removeTask(taskId);
}

const addTask = () => {
    if(newTask.value.length === 0) {
        error.value = true;
        return;
    }

    tasksStore.addTask(
        getUserId.value, 
        { name: newTask.value, createAt: new Date().toISOString() }
    );

    newTask.value = '';
}

const toggleCompleted = (taskId, completedValue) => {
    tasksStore.updateTask(taskId, { completed: completedValue })
}

const windowRef = ref(window);
const { x, y } = useMouse(windowRef);

onMounted(() => {
    console.log("mounted");

    var test = null;

    console.log(test === undefined);
    console.log(undefined === null);
})

onBeforeMount(() => {
    console.log("beforeMount");
    tasksStore.fetchTasks(getUserId.value);
})

onBeforeUnmount(() => {
    stopErrorWatch();
})

</script>

<!-- Etapes vue 2 vers vue 3:
 1. Ajouter l'option setup()
 2. Transposer le contenu option API vers le setup en composition
 3. Ne pas oublier le return dans setup pour retourner les données et méthodes utilisées dans le template
 4. Attention aux imports pour ref et autre composants vue 3
 5. Supprimer le contenu option
 6. Changer le script en script setup puis directement placer le contenu de setup() dans le script
 7. Le return n'est plus nécessaire depuis le script setup
<script>
import { ref, computed, watch, onMounted } from 'vue';

var id = 1;

export default {
    setup() {
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

        const newTask = ref('');
        const error = ref(false);

        const isTasksEmpty = computed(() => tasks.value.length === 0);

        const deleteTask = (taskId) => {
            tasks.value = tasks.value.filter(task => task.id !== taskId);
        };

        const addTask = () => {
            if (newTask.value.length === 0) {
                error.value = true;
                return;
            }

            tasks.value = [{
                id: id++, 
                name: newTask.value, 
                completed: false
            }, ...tasks.value];
            newTask.value = '';
        };

        watch(error, (val) => {
            if (val) {
                setTimeout(() => {
                    error.value = false;
                }, 3000);
            }
        });

        onMounted(() => {
            var test = null;

            console.log(test === undefined);
            console.log(undefined === null);
        });

        return {
            tasks,
            newTask,
            error,
            isTasksEmpty,
            deleteTask,
            addTask
        }
    },
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
-->

<style scoped>

.content {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
}

.task-input {
    width: 40%;
    height: 3em;
    border-radius: 0.5em;
}

ul {
    list-style: none;
    padding: 0;
}

</style>