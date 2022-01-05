<template>
	<div class="hw-ram">
		<ContainerBlock :type="type" :usage="usage" :temperature="temperature" :model="model" :extra="extra">
			<div class="usage-chart"></div>
		</ContainerBlock>
	</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, ref } from "vue"
	import ContainerBlock from "/@/components/ContainerBlock/index.vue"

	export default defineComponent({
		name: "Ram",
		components: { ContainerBlock },
		setup() {
			const usage = ref(188)
			const temperature = ref(188)
			const model = ref("TRIDENTZ ROYAL 64GB")
			const type = ref("RAM")
			const extra = reactive({
				title: "MEMORY FREQUENCY",
				value: "4000",
				unit: "MHz"
			})

			return { type, usage, temperature, model, extra }
		}
	})
</script>

<style lang="less" scoped>
	.hw-ram {
		position: absolute;
		left: 80px;
		top: 750px;
		.usage-chart {
			height: 100%;
			border: 1px solid #f7ea00;
		}
	}
</style>
