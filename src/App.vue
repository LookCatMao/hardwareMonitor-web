<template>
	<div id="app">
		<AutoFitContainer>
			<div class="hw-container">
				<Cpu :showDetail="flag === 'cpu'" @click="showDetail('cpu')" />
				<Gpu :showDetail="flag === 'gpu'" @click="showDetail('gpu')" />
				<Ram :showDetail="flag === 'ram'" @click="showDetail('ram')" />
			</div>
		</AutoFitContainer>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from "vue"
	import Gpu from "/@/views/gpu/index.vue"
	import AutoFitContainer from "/@/components/AutoFitContainer/index.vue"
	import Cpu from "/@/views/cpu/index.vue"
	import Ram from "/@/views/ram/index.vue"
	export default defineComponent({
		components: { Ram, Cpu, Gpu, AutoFitContainer },
		setup() {
			const flag = ref("")

			function showDetail(type: string) {
				if (type !== flag.value) {
					flag.value = type
				} else {
					flag.value = ""
				}
			}

			return { flag, showDetail }
		}
	})

	onMounted(() => {})
</script>

<style lang="less">
	html,
	body {
		overflow: hidden auto;
		height: 100%;
		width: 100%;
		transform: translateZ(0);
		user-select: none;
	}
	#app {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hw-container {
		height: 100%;
		width: 100%;
		background-color: #000;
		color: #fff;
		> div {
			transition: 0.5s;
			transition-delay: 0.2s;
			cursor: pointer;
		}
		div.active {
			top: 0.75rem /* 12/16 */;
			right: 0.75rem /* 12/16 */;
			bottom: 0.75rem /* 12/16 */;
			left: 0.75rem /* 12/16 */;
			width: calc(100% - 1.5rem);
			height: calc(100% - 1.5rem);
			cursor: unset;
			animation: touchDown 0.4s;
			z-index: 100;
		}
	}
	@keyframes touchDown {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.95);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
