<template>
	<div class="hw-date">
		<div class="date">2022 / 01 / 05</div>
		<div class="weekday">WED</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Date",
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	.hw-date {
		position: absolute;
		left: 16px;
		bottom: 6px;
		font-size: 72px;
		color: #f7ea00;
		font-family: "Agency FB", serif;
		font-weight: bold;
		line-height: 1;
		> div {
			display: inline-block;
		}
		.date {
		}
		.weekday {
			margin-left: 24px;
		}
	}
</style>
