import { reactive, computed } from 'vue';

export default function useList(store) {
    const filter = reactive({});

    const list = computed(() => store.list);
    const loadingList = computed(() => store.loadingList);
    const loaded = computed(() => store.loaded);

    const initFilter = async (filter, localFilter) => {}
    const filterInitialized = () => loadList();
    const loadList = () => store.fetchList(filter);

    return { filter, list, loadingList, loaded, initFilter, filterInitialized, loadList };
}