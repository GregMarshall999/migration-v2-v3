export default {
	data(){
		return{ filter: {} }
	},
	methods: {
		async initFilter(filter, localFilter){
		},
		filterInitialized(){
			this.loadList()
		},
		loadList() {
			this.$store.dispatch(this.$store.msg[this.storeName].FETCH_LIST, this.filter)
		},
	},
	computed: {
		/**
		 * List récupérée
		 */
		list() {
			return this.$store.state[this.storeName].list
		},
		/**
		 * Chargement list
		 */
		loadingList() {
			return this.$store.state[this.storeName].loadingList
		},
		/**
		 * List chargée
		 */
		loaded() {
			return this.$store.state[this.storeName].loaded
		},
		/**
		 * Nom store en fonction du nom de la vue
		 */
		storeName(){
			return this.store || (this.$options.name.charAt(0).toLowerCase() + this.$options.name.slice(1))
		},
	},
}