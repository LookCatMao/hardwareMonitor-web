<template>
	<div class="ram" :class="{ active: showDetail }">
		<div class="display-basic">
			<p class="head">
				<span class="title">内存</span>
				<span class="model">16GB DDR4</span>
			</p>
			<div class="chart">
				<LineChart title="内存使用量" legend="16GB" />
			</div>
			<div class="text">
				<div>
					<p class="title">使用中(已压缩)</p>
					<span class="value">10.9 GB (924 MB)</span>
				</div>
				<div>
					<p class="title">可用</p>
					<span class="value">4.9 GB</span>
				</div>
				<div>
					<p class="title">SWAP</p>
					<span class="value">1.4/8 GB</span>
				</div>
				<div>
					<p class="title">运行频率</p>
					<span class="value">3000 MHz</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import LineChart from "/@/components/lineChart/index.vue"

	export default defineComponent({
		name: "Ram",
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
	.ram {
		position: absolute;
		top: 0.75rem /* 12/16 */;
		left: 80.25rem /* 12/16 */;
		width: 39rem /* 624/16 */;
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
			justify-content: space-between;
			padding: 0.25rem /* 4/16 */ 0;
			& > div {
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
