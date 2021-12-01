<template>
	<div class="ram">
		<p>内存信息：</p>
		<p>使用中： {{ memToFixed(memoryInfo.used) }} GB</p>
		<p>可用： {{ memToFixed(memoryInfo.free) }} GB</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, watchEffect } from "vue"
	import { dataSource } from "/@/utils/dataSource"

	export default defineComponent({
		setup() {
			const memoryInfo = reactive({
				free: "---",
				swapFree: "---",
				swapTotal: "---",
				swapUsed: "---",
				total: "---",
				used: "---"
			})

			console.log(memoryInfo)

			function memToFixed(value: number) {
				if (value) {
					return Number(value).toFixed(1)
				} else {
					return "---"
				}
			}

			watchEffect(() => {
				if (dataSource.memory) {
					Object.assign(memoryInfo, dataSource.memory)
				}
			})

			return { memoryInfo, memToFixed }
		}
	})
</script>

<style scoped></style>
