<template>
    <div v-if="model" class="toast">
        <p><slot>Toast Message</slot></p>
    </div>
</template>

<script setup>

const model = defineModel({});

const endToast = () => {
    model.value = false;
}

defineExpose({ endToast });

</script>

<style scoped>

.toast {
    position: fixed;
    top: 100px;
    left: 40%;
    border: 1px solid #666666;
    background-color: rgb(238, 10, 86);
    color: white;
    padding: 1em;
    border-radius: 0.5em;
    z-index: 1000;
}

</style>