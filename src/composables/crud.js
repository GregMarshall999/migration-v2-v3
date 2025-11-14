import { ref, computed } from "vue";

export default function useCrud(
    store, 
    beforeSave = v => { return v; }, 
    afterSave = v => { return v; }, 
    confirm = message => {} //si le plugin offre un composable, importez son 'usePlugin' dans ce composable
) {
    const editValue = ref({});
    const showDialog = ref(false);

    const loading = computed(() => store.loading);
    const loadingSingle = computed(() => store.loadingSingle);

    const save = async value => {
        var edit = { ...value }

        edit = beforeSave(edit);

        if(edit.id)
            await store.updateSingle(edit).then(() => showDialog.value = false);
        else
            await store.addSingle(edit).then(() => showDialog.value = false);
        
        edit = afterSave(edit);
    }

    const onClickCrudAction = (menu, data) => {
        switch (menu.code) {
            case "Create":
                editValue.value = {}
                showDialog.value = true
                return true
            case "Update":
                editValue.value = { ...data }
                showDialog.value = true
                return true
            case "Delete":
                confirm("Êtes-vous sur de vouloir supprimer l'entité " + data.name + " ?")
                .then(confirm => {
                    if(confirm) store.deleteSingle(data.id).then(()=>{
                        afterDelete(data)
                    })
                })
                return true
            default:
                return false
        }
    }

    const onClickAction = (menu, data) => {
        if(onClickCrudAction(menu, data)) return
        switch (menu.code) {
        default:
            break
        }
    }

    return { editValue, showDialog, loading, loadingSingle, save, onClickCrudAction, onClickAction };
}