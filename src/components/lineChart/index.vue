<template>
	<div class="lineChart">
		<div class="head">
			<span class="title">60秒内的利用率 %</span>
			<span class="legend">100%</span>
		</div>
		<div class="chart" ref="chartElRef"></div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from "vue"
	import { useECharts } from "/@/utils/use/useEcharts"
	import { getChartOptions } from "/@/components/lineChart/chartOptions"

	export default defineComponent({
		name: "LineChart",
		setup() {
			const chartElRef = ref<HTMLDivElement>()
			const { setOptions } = useECharts(chartElRef as Ref<HTMLDivElement>)

			const time: any = []
			for (let i = 0; i <= 60; i++) {
				time.push(i)
			}

			const radomData: any = []
			for (let i = 0; i <= 60; i++) {
				radomData.push(Math.floor(Math.random() * 100))
			}

			setOptions(getChartOptions(time, radomData))

			return { chartElRef }
		}
	})
</script>

<style lang="less" scoped>
	.lineChart {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.head {
			display: flex;
			justify-content: space-between;
			font-size: 0.75rem /* 12/16 */;
			color: #ccc;
			margin-bottom: 0.25rem /* 4/16 */;
		}
		.chart {
			flex: 1;
			width: 100%;
			border: 1px solid #117dbb;
		}
	}
</style>
