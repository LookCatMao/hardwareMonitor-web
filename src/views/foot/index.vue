<template>
	<div class="hw-foot">
		<Calendar :currentDateTime="currentDateTime" />
		<Clock :currentDateTime="currentDateTime" />
		<Copyright />
	</div>
</template>

<script>
	import Copyright from "./child/copyright.vue"
	import Clock from "./child/clock.vue"
	import Calendar from "./child/calendar.vue"
	import { ref } from "vue"
	export default {
		name: "Foot",
		components: { Calendar, Clock, Copyright },
		setup() {
			const currentDateTime = ref(new Date())
			const timer = undefined
			updateCurrentDateTime()

			function updateCurrentDateTime() {
				clearTimeout(timer)
				setTimeout(() => {
					currentDateTime.value = new Date()
					updateCurrentDateTime()
				}, 100)
			}

			return { currentDateTime }
		}
	}
</script>

<style lang="less" scoped>
	.hw-foot {
		position: absolute;
		top: 1820px;
		left: 20px;
		right: 20px;
		bottom: 20px;
	}
</style>
