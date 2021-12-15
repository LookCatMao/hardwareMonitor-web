<template>
	<div class="cpu" :class="{ active: showDetail }">
		<transition name="fade">
			<div class="display-basic" v-if="!showDetail">
				<p class="head">
					<span class="title">CPU</span>
					<span class="model">Intel(R) Core(TM) i7-9750H</span>
				</p>
				<div class="chart">
					<LineChart />
				</div>
				<div class="text">
					<div>
						<p class="title">CPU 使用率</p>
						<span class="value">56%</span>
					</div>
					<div>
						<p class="title">运行频率</p>
						<span class="value">4.0 GHz</span>
					</div>
					<div>
						<p class="title">逻辑处理器</p>
						<span class="value">12</span>
					</div>
					<div>
						<p class="title">CPU 温度</p>
						<span class="value">64 ℃</span>
					</div>
				</div>
			</div>
			<div class="display-detail" v-else> Hi </div>
		</transition>
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
		top: 0.75rem /* 12/16 */;
		left: 0.75rem /* 12/16 */;
		width: 39rem /* 624/16 */;
		height: 32.625rem /* 522/16 */;
		background-color: #444444;
		padding: 1rem;
		.display-basic,
		.display-detail {
			position: absolute;
			left: 1rem;
			top: 1rem;
			right: 1rem;
			bottom: 1rem;
		}
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
