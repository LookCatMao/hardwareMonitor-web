<template>
	<div class="hw-container-block">
		<div class="main">
			<div class="temperature">
				<span class="value">{{ temperature }}</span>
				<span class="unit">°C</span>
			</div>
			<div class="custom-slot">
				<slot></slot>
			</div>
			<div class="usage">
				<span class="value">{{ usage }}</span>
				<span class="unit">%</span>
			</div>
		</div>
		<div class="sub">
			<div class="model">{{ model }}</div>
			<div class="extra">
				<p class="title">{{ extra.title }}</p>
				<p class="content">
					<span class="value">{{ extra.value }}</span>
					<span class="unit">{{ extra.unit }}</span>
				</p>
			</div>
		</div>
		<div class="type">{{ type }}</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "ContainerBlock",
		props: {
			type: { type: String, default: "" },
			model: { type: String, default: "" },
			usage: { type: Number, default: 0 },
			temperature: { type: Number, default: 0 },
			extra: {
				type: Object,
				default: () => ({
					title: "",
					value: "",
					unit: ""
				})
			}
		},
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	@import "style";
</style>
