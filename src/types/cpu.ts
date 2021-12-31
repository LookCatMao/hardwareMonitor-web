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
			//总使用率
			combined: number
		}
	]
}
