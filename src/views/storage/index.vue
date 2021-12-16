<template>
	<div class="storage" :class="{ active: showDetail }">
		<p class="head">
			<span class="title">存储</span>
			<span class="model">WDC PC SN750 1TB</span>
		</p>
		<div class="storage-current">
			<div class="chart">
				<LineChart title="磁盘传输速率" />
			</div>
			<ul class="summary">
				<li>
					<p>活动时间</p>
					<span>4%</span>
				</li>
				<li>
					<p>平均响应时间</p>
					<span>1.7 毫秒</span>
				</li>
				<li class="read">
					<p>读取速度</p>
					<span>10.4 KB/秒</span>
				</li>
				<li class="write">
					<p>写入速度</p>
					<span>102.5 KB/秒</span>
				</li>
			</ul>
		</div>
		<div class="storage-list">
			<ul>
				<li class="active">
					<div class="dot"></div>
					<div class="info">
						<p class="title">WDC PC SN750 1TB (C:)</p>
						<div class="space-bar">
							<div class="bar"></div>
						</div>
						<p class="space-text"> 235.5 GB 可用，共 965 GB </p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import LineChart from "/@/components/lineChart/index.vue"

	export default defineComponent({
		name: "Storage",
		components: { LineChart },
		props: {
			showDetail: {
				type: Boolean,
				default: false
			}
		},
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	.storage {
		position: absolute;
		top: 34.125rem /* 546/16 */;
		left: 0.75rem /* 12/16 */;
		width: 58.875rem /* 942/16 */;
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
		.storage-current {
			display: flex;
			height: 22rem;
			.chart {
				width: 75%;
			}
			.summary {
				padding: 2rem 1rem;
				li {
					border-left: 3px solid transparent;
					padding-left: 0.5rem /* 8/16 */;
					margin-bottom: 1.5rem;
					p {
						color: #ccc;
					}
					span {
						font-size: 1.5rem /* 24/16 */;
					}
					&.read {
						border-left: 3px solid #4da60c;
					}
					&.write {
						border-left: 3px dashed #4da60c;
					}
				}
			}
		}
		.storage-list {
			margin-top: 1rem;
			//background-color: #bfa;
			ul {
				li {
					border: 1px solid transparent;
					width: 18.75rem /* 300/16 */;
					display: flex;
					align-items: center;
					padding: 0.375rem /* 6/16 */;
					.dot {
						margin: 0 0.5rem;
						width: 1.375rem /* 22/16 */;
						height: 1.375rem /* 22/16 */;
						border-radius: 1.5rem /* 24/16 */;
						border: 1px solid #fff;
					}
					.info {
						flex: 1;
						margin-left: 0.5rem /* 8/16 */;
						.space-bar {
							height: 0.5rem;
							border: 1px solid #eee;
							background-color: #555;
							position: relative;
							.bar {
								position: absolute;
								left: 0;
								top: 0;
								bottom: 0;
								right: 25%;
								background-color: #fff;
							}
						}
						.space-text {
							color: #ccc;
							font-size: 0.75rem /* 12/16 */;
						}
					}
					&.active {
						border: 1px solid #ccc;
					}
				}
			}
		}
	}
</style>
