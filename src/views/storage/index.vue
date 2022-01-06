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
		width: 950px;
		height: 300px;
		position: absolute;
		top: 1490px;
		left: 60px;
		background-image: url("@/assets/images/container-storage.png");
		background-size: 100%;
		.type {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 120px;
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
