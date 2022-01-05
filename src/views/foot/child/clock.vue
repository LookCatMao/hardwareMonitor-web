<template>
	<div class="hw-clock">
		<div class="time">4:48</div>
		<div class="meridiem">PM</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Clock",
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	.hw-clock {
		position: absolute;
		right: 235px;
		bottom: 20px;
		font-size: 64px;
		font-family: "Agency FB", serif;
		color: #02e2ff;
		font-weight: bold;
		line-height: 1;
		text-align: right;
		> div {
			display: inline-block;
		}
		.meridiem {
			margin-left: 16px;
		}
	}
</style>
