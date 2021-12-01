import { useWebSocket } from "@vueuse/core"
import { reactive, ref, watchEffect } from "vue"

export const dataSource = reactive({})
export const wsConnected = ref(false)

const { data } = useWebSocket("ws://127.0.0.1:8887", {
	autoReconnect: true,
	heartbeat: true,
	onConnected: () => {
		console.log("Connected")
		wsConnected.value = true
	},
	onError: () => {
		console.log("WebSocket error")
		wsConnected.value = false
	},
	onDisconnected: () => {
		wsConnected.value = false
	}
})

watchEffect(() => {
	if (data.value) {
		try {
			Object.assign(dataSource, JSON.parse(data.value))
		} catch (e) {
			console.log(e)
		}
	}
})
