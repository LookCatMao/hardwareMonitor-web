<template>
	<div class="gpu" :class="{ active: showDetail }">
		<p class="head">
			<span class="title">GPU{{ showDetail }}</span>
			<span class="model">NVIDIA GeForce GTX 1660 Ti</span>
		</p>
		<div class="chart">
			<LineChart />
		</div>
		<div class="text">
			<div class="gpu-mem"></div>
			<div class="gpu-temperature"></div>
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
		top: 1rem;
		left: 42rem;
		width: 40rem;
		height: 28rem;
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
			height: 17.5rem /* 280/16 */;
			margin-bottom: 1rem /* 16/16 */;
		}
		.text {
			display: flex;
			height: 3rem;
			& > div {
				border-left: 1px solid #ccc;
			}
			&:first-child {
				border-left: none;
			}
		}
	}
</style>
