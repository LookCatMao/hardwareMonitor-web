// import Auth from "@/auth"
// import { en, de } from "@/utils/crypto"
import axios from "axios"

// @ts-ignore
const appConfig = window.__CONF__
const baseURL = `${appConfig.API_URL}${appConfig.API_URL_PREFIX}`

axios.interceptors.request.use((request) => {
	request.headers.Authorization = localStorage.getItem("token")
	/*if (request.data) {
		request.data = {
			requestData: en(request.data)
		}
	}*/

	request.baseURL = baseURL
	request.timeout = 10000
	return Promise.resolve(request)
})

axios.interceptors.response.use(
	(response) => {
		/*if (typeof response.data === "string") {
			return Promise.resolve(JSON.parse(de(response.data)))
		}
		if (response.data.code === "1200") {
			Auth.authTimeout()
		}*/
		if (response.data.code === "0000") {
			return Promise.resolve(response)
		} else {
			return Promise.reject("状态码错误")
		}
	},
	(error) => {
		// 这里对 error 预期结果是包含具体错误信息和状态码
		console.log(error)
		return Promise.reject("请求失败")
		/*if (error && error.response && error.response.status) {
			console.log("error")
			switch (error.response.status) {
				case 500:
					// do something...
					break
				case 404:
					// do something...
					break
				default:
					// do something...
					break
				// break
			}
		}*/
	}
)

export const apiPOSTGetWarningNum = async () => {
	return axios({
		method: "POST",
		url: "/getWarningNum"
	})
}

export const apiPOSTGetLastPhRecord = async (data: any) => {
	return axios({
		method: "POST",
		url: "/getLastPhRecord",
		data
	})
}

export const apiPOSTGetLastPhRecordFirstly = async () => {
	return axios({
		method: "POST",
		url: "/getLastPhRecordFirstly"
	})
}

export const apiPOSTGetLastTransactionFirstly = async () => {
	return axios({
		method: "POST",
		url: "/getLastTransactionFirstly"
	})
}

export const apiPOSTGetLastTransaction = async (data: any) => {
	return axios({
		method: "POST",
		url: "/getLastTransaction",
		data
	})
}
