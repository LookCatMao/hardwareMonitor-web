<template>
	<div class="hw-gpu">
		<ContainerBlock :type="type" :usage="usage" :temperature="temperature" :model="model">
			<div class="gpu-extra-info">
				<p>[CORE]</p>
				<p>[VRM]</p>
			</div>
		</ContainerBlock>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue"
	import ContainerBlock from "/@/components/ContainerBlock/index.vue"

	export default defineComponent({
		name: "Gpu",
		components: { ContainerBlock },
		setup() {
			const usage = ref(188)
			const temperature = ref(188)
			const model = ref("RTX 3080Ti HOF EXTREME")
			const type = ref("GPU")

			return { type, usage, temperature, model }
		}
	})
</script>

<style lang="less" scoped>
	.hw-gpu {
		position: absolute;
		left: 80px;
		top: 450px;
	}
</style>
