<template>
	<div class="cpu">
		<p>处理器信息：</p>
		<p v-if="getOneCpu">
			<span>{{ getOneCpu.vendor }} {{ getOneCpu.model }}</span>
			<span>线程数：{{ getOneCpu.totalCores }}</span>
		</p>
		<p v-else>---</p>
		<ul>
			<li v-for="item in cpuList">
				<span>逻辑核心【{{ item.order }}】</span>
				<span>使用率：{{ Number((1 - item.idle) * 100).toFixed(0) }} %</span>
				<span>频率: {{ item.mhz }} MHz</span>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, ref, watchEffect } from "vue"
	import { dataSource } from "/@/utils/dataSource"

	export default defineComponent({
		setup() {
			const cpuList = ref([])

			const getOneCpu = computed(() => {
				if (cpuList.value.length) {
					return cpuList.value[0]
				} else {
					return false
				}
			})

			watchEffect(() => {
				if (dataSource.cpu) {
					// 数据清空
					cpuList.value.splice(0, cpuList.value.length)
					// 推入新数据
					cpuList.value.push(...dataSource.cpu.cpuList)
				}
			})
			console.log(cpuList.value)

			return { cpuList, getOneCpu }
		}
	})
</script>

<style scoped></style>
