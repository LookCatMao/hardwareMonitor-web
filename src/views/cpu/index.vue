<template>
	<div class="hw-cpu">
		<ContainerBlock :type="type" :usage="usage" :temperature="temperature" :model="model" :extra="extra">
			<div class="usage-chart"></div>
		</ContainerBlock>
	</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, ref } from "vue"
	import ContainerBlock from "/@/components/ContainerBlock/index.vue"

	export default defineComponent({
		name: "Cpu",
		components: { ContainerBlock },
		setup() {
			const usage = ref(188)
			const temperature = ref(188)
			const model = ref("AMD Ryzen 7 5950X")
			const type = ref("CPU")
			const extra = reactive({
				title: "CLOCK SPEED",
				value: "5.0",
				unit: "GHz"
			})

			return { type, usage, temperature, model, extra }
		}
	})
</script>

<style lang="less" scoped>
	.hw-cpu {
		position: absolute;
		left: 80px;
		top: 150px;
		.usage-chart {
			height: 100%;
			border: 1px solid #f7ea00;
		}
	}
</style>
