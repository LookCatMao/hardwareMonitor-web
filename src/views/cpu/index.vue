<template>
	<div class="cpu" :class="{ active: showDetail }">
		<div class="display-basic">
			<p class="head">
				<span class="title">CPU{{ showDetail }}</span>
				<span class="model">Intel(R) Core(TM) i7-9750H</span>
			</p>
			<div class="chart">
				<LineChart />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import LineChart from "/@/components/lineChart/index.vue"

	export default defineComponent({
		name: "Cpu",
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
	})
</script>

<style lang="less" scoped>
	.cpu {
		position: absolute;
		top: 1rem;
		left: 1rem;
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
			height: 21.875rem; /* 350/16 */
		}
	}
</style>
