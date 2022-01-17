<template>
	<div class="hw-date">
		<div class="date"
			>{{ currentDateTime.getFullYear() }} / {{ PrefixZero(currentDateTime.getMonth() + 1, 2) }} /
			{{ PrefixZero(currentDateTime.getDate(), 2) }}</div
		>
		<div class="weekday">{{ weekDays[currentDateTime.getDay()] }}</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import { PrefixZero } from "/@/utils/formatter"

	export default defineComponent({
		name: "Calendar",
		props: {
			currentDateTime: Date
		},
		setup() {
			const weekDays = ["占位符", "Mon", "Tues", "Wed", "疯狂星期四", "Fri", "Sat", "Sun"]
			return { PrefixZero, weekDays }
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
