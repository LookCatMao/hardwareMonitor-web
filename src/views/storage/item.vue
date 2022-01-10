<template>
	<li class="hw-disk-item">
		<div class="drive-info">
			<div class="drive-letter">C:</div>
			<div class="drive-basic">
				<p class="drive-type">SSD</p>
				<p class="drive-size">
					<span class="value">512</span>
					<span class="unit">GB</span>
				</p>
			</div>
		</div>
		<div class="drive-space">
			<div class="space-used">
				<div class="title">USED</div>
				<div class="display">
					<span class="value">123.4</span>
					<span class="unit">GB</span>
				</div>
			</div>
			<div class="space-free">
				<div class="title">FREE</div>
				<div class="display">
					<span class="value">123.4</span>
					<span class="unit">GB</span>
				</div>
			</div>
			<div class="space-chart">
				<div class="bar"></div>
			</div>
		</div>
	</li>
</template>

<script>
	export default {
		name: "DiskItem"
	}
</script>

<style lang="less" scoped>
	.hw-disk-item {
		display: inline-block;
		width: 170px;
		height: 240px;
		background-image: url("@/assets/images/storage-devices.png");
		background-size: 100%;
		padding-top: 12px;
		font-family: "Agency FB", serif;
		font-weight: bold;
		line-height: 1;
		margin: 0 10px;
		.drive-info {
			height: 104px;
			display: flex;
			padding-left: 12px;
			padding-right: 8px;
			.drive-letter {
				font-size: 72px;
				color: #f7ea00;
			}
			.drive-basic {
				flex: 1;
				text-align: right;
				color: #02e2ff;
				.drive-type {
					font-size: 36px;
				}
				.drive-size {
					font-size: 30px;
					opacity: 50%;
				}
			}
		}
		.drive-space {
			color: #02e2ff;
			padding: 10px;
			.space-free,
			.space-used {
				display: flex;
				align-items: flex-end;
				margin-bottom: 4px;
				.title {
					flex: 1;
					font-size: 24px;
					opacity: 50%;
				}
				.display {
					font-size: 32px;
					.unit {
						text-align: right;
						width: 32px;
						display: inline-block;
					}
				}
			}
			.space-chart {
				height: 30px;
				width: 100%;
				background-color: #02e2ff88;
				overflow: hidden;
				.bar {
					width: 30%;
					height: 100%;
					background-color: #02e2ff;
				}
			}
		}
	}
</style>
