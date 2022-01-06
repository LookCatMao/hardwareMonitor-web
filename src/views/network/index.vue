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
		<div class="type">NETWORK</div>
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
		width: 900px;
		height: 400px;
		position: absolute;
		top: 1050px;
		left: 110px;
		background-image: url("@/assets/images/container-network.png");
		background-size: 100%;
		.type {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 130px;
			text-align: center;
			font-size: 34px;
			font-family: "Agency FB", serif;
			line-height: 1;
			font-weight: bold;
			letter-spacing: 1px;
			color: #f7ea00;
		}
	}
</style>
