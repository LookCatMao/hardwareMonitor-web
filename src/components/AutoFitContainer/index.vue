<template>
	<div class="contain-wrapper">
		<div
			class="contain-container"
			id="Contain"
			:style="{ width: configSize.width + 'px', height: configSize.height + 'px', transform: `scale(${ratio})` }"
			v-if="onload"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import { useEventListener } from "/@/utils/use/useEventListener"
	import { calcSize, height, width, onload, configSize, ratio } from "/@/utils/use/useAutoFit"
	import { tryOnUnmounted } from "@vueuse/core"

	export default defineComponent({
		name: "AutoFitContainer",
		setup() {
			// 相关方法变量已分离至useAutoFit.ts中，以便于其他组件取用宽高参数
			calcSize()
			const { removeEvent } = useEventListener({
				el: window,
				name: "resize",
				listener: calcSize
			})

			tryOnUnmounted(() => {
				removeEvent()
			})

			return { width, height, onload, configSize, ratio }
		}
	})
</script>

<style lang="less" scoped>
	.contain-wrapper {
		flex: 1;
		background-color: #999;
		display: flex;
		justify-content: center;
		align-items: center;
		.contain-container {
			overflow: hidden;
			position: relative;
			transition: 0.4s;
		}
	}
</style>
