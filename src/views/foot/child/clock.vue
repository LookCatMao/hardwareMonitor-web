<template>
	<div class="hw-clock">
		<div class="time"
			>{{ PrefixZero(currentDateTime.getHours(), 2) }}:{{ PrefixZero(currentDateTime.getMinutes(), 2) }}:{{
				PrefixZero(currentDateTime.getSeconds(), 2)
			}}</div
		>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import { PrefixZero } from "/@/utils/formatter"

	export default defineComponent({
		name: "Clock",
		props: {
			currentDateTime: Date
		},
		setup() {
			return { PrefixZero }
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
