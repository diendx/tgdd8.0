<template>
	<p class="control has-icons-left">
		<v-list-item-avatar
            color="indigo"
            class="text-h5 font-weight-light white--text"
        >
        {{ product.name }}
        </v-list-item-avatar>
	</p>
</template>

<script>
export default {
    name: 'search',
	data () {
		return {
			value: ''
		}
	},

	computed: {
		placeholder () {
			if (this.$route.path === '/wishlist') {
				return 'Search in wishlist...';
			} else {
				return 'Search...';
			}
		}
	},

	methods: {
		search (value) {
			if (value.length > 0) {
				this.$product.commit('setHasUserSearched', true);
				this.$product.commit('setProductTitleSearched', value);
			} else {
				this.$product.commit('setHasUserSearched', false);
				this.$product.commit('setProductTitleSearched','');
			}
		}
	}
}
</script>
<style lang="sass" scoped>
.v-format


</style>

