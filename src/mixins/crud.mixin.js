import listMixin from "@/services/mixins/list.mixin.js"
export default {
	mixins: [
		listMixin,
	],
	data(){
		return{
			editValue: {},
			showDialog: false,
		}
	},
	methods: {
		async save(value){
			var editValue = { ...value }
			if(this.beforeSave) editValue = this.beforeSave(editValue)
			if(editValue.id)
				await this.$store.dispatch(this.$store.msg[this.storeName].UPDATE_SINGLE, editValue).then(() => this.showDialog = false)
			else
				await this.$store.dispatch(this.$store.msg[this.storeName].ADD_SINGLE, editValue).then(() => this.showDialog = false)
			if(this.afterSave) editValue = this.afterSave(editValue)
		},
		onClickCrudAction(menu, data) {
			switch (menu.code) {
			case "Create":
				this.editValue = {}
				this.showDialog = true
				return true
			case "Update":
				this.editValue = data
				this.showDialog = true
				return true
			case "Delete":
				this.$dialog.confirm("Êtes-vous sur de vouloir supprimer l'entité " + data.name + " ?")
					.then(confirm => {
						if(confirm) this.$store.dispatch(this.$store.msg[this.storeName].DELETE_SINGLE, data.id).then(()=>{
							if(this.afterDelete) this.afterDelete(data)
						})
					})
				return true
			default:
				return false
			}
		},
		onClickAction(menu, data) {
			if(this.onClickCrudAction(menu, data)) return
			switch (menu.code) {
			default:
				break
			}
		},
	},
	computed: {
		/**
		 * Chargement requête
		 */
		loading() {
			return this.$store.state[this.storeName].loading
		},
		/**
		 * Chargement unitaire
		 */
		loadingSingle() {
			return this.$store.state[this.storeName].loadingSingle
		},
	},
}