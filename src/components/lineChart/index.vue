<template>
	<div class="lineChart" ref="chartElRef"></div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue"

	export default defineComponent({
		setup() {
			const chartElRef = ref<HTMLElement>()

			return { chartElRef }
		}
	})
</script>

<style scoped></style>
