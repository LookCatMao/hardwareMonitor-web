<template>
	<div class="storage" :class="{ active: showDetail }"></div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Storage",
		props: {
			showDetail: {
				type: Boolean,
				default: false
			}
		},
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped></style>
