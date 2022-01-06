<template>
	<div class="hw-network">
		<div class="network-chart">
			<div class="chart"></div>
			<div class="legend">
				<p class="download">DOWNLOAD</p>
				<p class="upload">UPLOAD</p>
			</div>
		</div>
		<div class="network-usage">
			<div class="download usage-item">
				<div class="title">DOWNLOAD</div>
				<div class="speed">
					<span class="value">9.24</span>
					<span class="unit">Mbps</span>
				</div>
			</div>
			<div class="upload usage-item">
				<div class="title">UPLOAD</div>
				<div class="speed">
					<span class="value">12.34</span>
					<span class="unit">Kbps</span>
				</div>
			</div>
		</div>
		<div class="type">NETWORK</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Network",

		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	@import "style";
</style>
