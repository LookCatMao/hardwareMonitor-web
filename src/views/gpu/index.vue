<template>
	<div class="gpu" :class="{ active: showDetail }">
		<p class="head">
			<span class="title">GPU</span>
			<span class="model">NVIDIA GeForce GTX 1660 Ti</span>
		</p>
		<div class="chart">
			<LineChart />
		</div>
		<div class="text">
			<div class="gpu-usage">
				<p class="title">GPU 利用率</p>
				<span class="value">1%</span>
			</div>
			<div class="gpu-mem">
				<p class="title">GPU 内存</p>
				<span class="value">0.8/6 GB</span>
			</div>
			<div class="gpu-temperature">
				<p class="title">GPU 温度</p>
				<span class="value">56 ℃</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import LineChart from "/@/components/lineChart/index.vue"
	export default {
		name: "Gpu",
		components: { LineChart },
		props: {
			showDetail: {
				type: Boolean,
				default: false
			}
		},
		setup(props) {
			return {}
		}
	}
</script>

<style lang="less" scoped>
	.gpu {
		position: absolute;
		top: 0.75rem /* 12/16 */;
		left: 40.5rem /* 12/16 */;
		width: 39rem /* 624/16 */;
		height: 32.625rem /* 522/16 */;
		background-color: #444444;
		padding: 1rem;
		.head {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			margin-bottom: 0.625rem /* 10/16 */;
			.title {
				font-size: 2rem /* 32/16 */;
			}
			.model {
				font-size: 1.125rem /* 18/16 */;
			}
		}
		.chart {
			width: 100%;
			height: 21.875rem /* 350/16 */;
			margin-bottom: 1rem /* 16/16 */;
		}
		.text {
			display: flex;
			padding: 0.25rem /* 4/16 */ 0;
			& > div {
				flex: 1;
				border-left: 1px solid #888;
				padding: 0 0.375rem /* 6/16 */;
				&:first-child {
					border-left: none;
				}
				.title {
					color: #ccc;
					margin-bottom: 0;
				}
				.value {
					font-size: 1.375rem /* 22/16 */;
				}
			}
		}
	}
</style>
