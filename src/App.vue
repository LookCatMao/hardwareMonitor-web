<template>
	<div id="app">
		<div class="container">
			<div class="left">
				<Cpu />
			</div>
			<div class="center"></div>
			<div class="right"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	// import { getWebsocket } from "/@/utils/websocket"
	// import { hwData } from "/@/utils/websocket"
	import { Socket } from "/@/utils/ws"
	import { onMounted } from "vue"
	import { hwData } from "/@/data/data"
	import Cpu from "/@/views/cpu/index.vue"

	onMounted(() => {
		const ws = new Socket({
			url: "ws://127.0.0.1:8887",
			isHeart: true,
			isReconnection: false,
			received: function (data) {
				Object.assign(hwData, JSON.parse(data))
			}
		})
		ws.connect()
		ws.sendMsg("")
	})
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
	.container {
		width: 960px;
		height: 540px;
		background-color: #eee;
		display: flex;
		.left,
		.center {
			flex: 4;
		}
		.right {
			flex: 2;
		}
	}
</style>
