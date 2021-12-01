<template>
	<div id="Gpu">
		<div id="GpuChart" ref="chartElRef"></div>
	</div>
</template>

<script lang="ts">
	import * as echarts from "echarts"
	import { onMounted, ref } from "vue"

	export default {
		name: "Gpu",
		setup() {
			const chartElRef = ref<HTMLElement>()

			let chart: any = null

			const time: any = []
			for (let i = 0; i <= 60; i++) {
				time.push(i)
			}

			const radomData: any = []
			for (let i = 0; i <= 60; i++) {
				radomData.push(Math.floor(Math.random() * 100))
			}

			function setCharts(update = false) {
				if (!chartElRef.value) return
				if (!update) {
					console.log("init chart")
					chart = echarts.init(chartElRef.value)
					chart.setOption({
						grid: {
							top: -1,
							bottom: -1,
							left: -1,
							right: -1
						},
						xAxis: {
							type: "category",
							boundaryGap: false,
							data: time,
							splitLine: {
								show: true, //显示纵向网格线
								lineStyle: {
									color: "#117dbb88",
									width: 1
								}
							},
							axisLine: {
								show: false
							},
							axisTick: {
								show: false //不显示刻度
							},
							axisLabel: {
								interval: 9,
								show: false
							}
						},
						yAxis: {
							type: "value",
							min: 0,
							max: 100,
							splitNumber: 10,
							axisLabel: {
								interval: 9,
								show: false
							},
							splitLine: {
								show: true, //显示纵向网格线
								lineStyle: {
									color: "#117dbb88",
									width: 1
								}
							}
						},
						series: [
							{
								data: radomData,
								type: "line",
								lineStyle: {
									color: "#1881bd",
									width: 1
								},
								symbol: "none",
								areaStyle: {
									color: "#1881bd22"
								}
							}
						]
					})
				}
			}

			onMounted(() => {
				setCharts()
			})

			return {
				chartElRef
			}
		}
	}
</script>

<style lang="less" scoped>
	#Gpu {
		width: 100%;
		height: 100%;
		padding: 10px;
		#GpuChart {
			border: 1px solid #117dbb;
			width: 100%;
			height: 100%;
		}
	}
</style>
