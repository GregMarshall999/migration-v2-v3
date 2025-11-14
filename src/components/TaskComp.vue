<template>
    <li ref="taskItem">
        <p @click="tasksStore.removeTask(taskId)">
            <slot name="task-name">Nom de la tache</slot>
        </p>
        <input 
            type="checkbox" 
            v-model="model" 
            @change="tasksStore.updateTask(taskId, { completed: model })" 
        />
        {{ x }} - {{ y }}
    </li>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks.store';
import { useTemplateRef } from 'vue';
import useMouse from '@composables/mouse';

const tasksStore = useTasksStore();

const model = defineModel();

defineProps({
    taskId: {
        type: Number,
        required: true
    }
})

const taskItem = useTemplateRef('taskItem');

const { x, y } = useMouse(taskItem);


</script>

<style scoped>

li {
    display: flex;
    gap: 1em;
    border: 2px solid #ccc;
    border-radius: 1em;
    padding: 1em 4em;

    p{
        cursor: pointer;
    }

    &:hover {
        background-color: #f0f0f0;
    }
}

</style>

