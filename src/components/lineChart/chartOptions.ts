import { EChartsOption } from "echarts"

export function getChartOptions(time, data): EChartsOption {
	return {
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
				data: data,
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
	}
}
