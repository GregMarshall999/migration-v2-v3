import { ref, onMounted, onUnmounted } from 'vue';

export default function useMouse(target) {
    const x = ref(0);
    const y = ref(0);

    function update(event) {
        x.value = event.pageX;
        y.value = event.pageY;
    }

    onMounted(() => {
        console.log(target.value);
        target.value.addEventListener('mousemove', update);
    })

    onUnmounted(() => {
        target.value.removeEventListener('mousemove', update);
    })

    return { x, y };
}