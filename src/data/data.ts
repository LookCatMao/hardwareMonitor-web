import { reactive } from "vue"
import { Socket } from "/@/utils/ws"

export const hwData = reactive<any>({})

const ws = new Socket({
	url: "ws://127.0.0.1:8887",
	isHeart: true,
	isReconnection: false,
	received: function (data) {
		Object.assign(hwData, JSON.parse(data))
	}
})
ws.connect()
	.then((r) => {
		// ws.sendMsg("")
		console.log(r)
	})
	.catch((err) => {
		console.log(err)
	})

console.log("sayHello")
