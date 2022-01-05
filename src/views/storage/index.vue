<template>
	<div class="hw-storage">
		<ul class="disk-list"></ul>
		<div class="disk-count"></div>
		<div class="disk-status">
			<div class="io"></div>
			<div class="read"></div>
			<div class="write"></div>
		</div>
		<div class="type">STORAGE</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Storage",

		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	.hw-storage {
	}
</style>
