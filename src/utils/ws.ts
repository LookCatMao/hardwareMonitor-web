export class Socket {
	private readonly url: string
	private readonly callback: any
	private ws: null | WebSocket
	private status: string | null
	private pingInterval: NodeJS.Timeout | null
	private readonly _timeout: number
	private readonly isHeart: any
	private readonly isReconnection: any
	/**
	 * @description: 初始化实例属性，保存参数
	 *
	 */
	constructor(options) {
		this.url = options.url
		this.callback = options.received
		this.ws = null
		this.status = null
		this.pingInterval = null
		// 心跳检测频率
		this._timeout = 3000
		this.isHeart = options.isHeart
		this.isReconnection = options.isReconnection
	}
	async connect(data?) {
		this.ws = new WebSocket(this.url)
		// 建立连接
		this.ws.onopen = (e) => {
			this.status = "open"
			console.log("连接成功", e)
			if (this.isHeart) {
				// 心跳
				this._heartCheck()
			}
			// 给后台发送数据
			if (data !== undefined) {
				return (this.ws as WebSocket).send(JSON.stringify({ type: "init" }))
			}
		}
		// 接受服务器返回的信息
		this.ws.onmessage = (e) => {
			if (typeof this.callback === "function") {
				return this.callback(e.data)
			} else {
				console.log("参数的类型必须为函数")
			}
		}
		// 关闭连接
		this.ws.onclose = (e) => {
			console.log("onclose", e)
			this._closeSocket(e)
		}
		// 报错
		this.ws.onerror = (e) => {
			console.log("onerror", e)
			this._closeSocket(e)
		}
	}
	sendMsg(data) {
		const msg = JSON.stringify(data)
		return (this.ws as WebSocket).send(msg)
	}
	_resetHeart() {
		if (this.pingInterval) {
			clearInterval(this.pingInterval)
		}
		return this
	}
	_heartCheck() {
		this.pingInterval = setInterval(() => {
			if ((this.ws as WebSocket).readyState === 1) {
				;(this.ws as WebSocket).send(JSON.stringify({ type: "ping" }))
			}
		}, this._timeout)
	}
	_closeSocket(e) {
		this._resetHeart()
		if (this.status !== "close") {
			console.log("断开，重连", e)
			if (this.isReconnection) {
				// 重连
				this.connect()
			}
		} else {
			console.log("手动关闭了", e)
		}
	}
	close() {
		this.status = "close"
		this._resetHeart()
		return (this.ws as WebSocket).close()
	}
}
