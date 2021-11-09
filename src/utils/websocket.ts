import { reactive } from "vue"

export const hwData = reactive({
	load: false,
	data: null
})

export let ws: undefined | WebSocket = undefined

export function getWebsocket() {
	if (ws) {
		return ws
	} else {
		connect()
	}
}

export function connect() {
	ws = new WebSocket("ws://127.0.0.1:8887")
	if (!ws) return false
	ws.onopen = function () {
		console.log("连接启动，发送Hello")
		ws && ws.send("Hello")
		setHello()
	}
	ws.onmessage = (event) => {
		hwData.load = true
		hwData.data = JSON.parse(event.data)
	}
	ws.onclose = () => {
		ws = undefined
		connect()
	}
}

function setHello() {
	setInterval(() => {
		if (!ws) return
		ws.send("Hello")
	}, 1000)
}
