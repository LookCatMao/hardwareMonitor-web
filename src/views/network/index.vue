<template>
	<div class="hw-network">
		<div class="network-chart">
			<div class="chart"></div>
			<div class="legend"></div>
		</div>
		<div class="network-usage">
			<div class="download"></div>
			<div class="upload"></div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Network",

		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	.hw-network {
	}
</style>
