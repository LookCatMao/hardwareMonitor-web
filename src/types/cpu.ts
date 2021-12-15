export interface cpuType {
	//制造商
	vendor: string
	//总逻辑核心数
	totalCores: number
	//型号
	model: string
	//所有cpu平均总使用率
	combined: number
	//cpu核心列表
	cpus: [
		{
			//序号
			order: number
			//cpu频率
			mhz: number
			//制造商
			vendor: string
			//型号
			model: string
			//总逻辑核心数
			totalCores: number
			//用户使用率
			user: number
			//系统使用率
			sys: number
			//当前等待率
			wait: number
			//错误率
			nice: number
			//总空闲率
			idle: number
			//总使用率
			combined: number
		}
	]
}
