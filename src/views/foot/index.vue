<template>
	<div class="hw-foot">
		<Date />
		<Clock />
		<Copyright />
	</div>
</template>

<script>
	import Copyright from "./child/copyright.vue"
	import Clock from "./child/clock.vue"
	import Date from "./child/date.vue"
	export default {
		name: "Foot",
		components: { Date, Clock, Copyright }
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
