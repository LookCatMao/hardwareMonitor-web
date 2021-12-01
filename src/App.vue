<template>
	<div id="app">
		<div class="hw-container">
			<div class="top">
				<div class="left">CPU</div>
				<div class="center"><Gpu /></div>
				<div class="right ram">RAM</div>
			</div>
			<div class="bottom">
				<div class="left">DISK</div>
				<div class="center">NETWORK</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	// import { getWebsocket } from "/@/utils/websocket"
	// import { hwData } from "/@/utils/websocket"
	import { onMounted } from "vue"

	import Cpu from "/@/views/cpu/index.vue"
	import Ram from "/@/views/ram/index.vue"
	import { wsConnected } from "/@/utils/dataSource"
	import Gpu from "/@/views/gpu/index.vue"

	onMounted(() => {})
</script>

<style lang="less">
	html,
	body {
		overflow: hidden auto;
		height: 100%;
		width: 100%;
	}
	#app {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hw-container {
		width: 960px;
		height: 540px;
		background-color: #000;
		color: #fff;
		display: flex;
		flex-direction: column;
		padding: 5px;
		> div {
			display: flex;
			flex: 1;
			&.ram {
				flex: 0.5;
			}
			> div {
				flex: 1;
				background-color: #222;
				margin: 5px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
