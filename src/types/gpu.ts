export interface gpuType {
	//gpu版本号
	driverVersion: string
	//gpu数量
	deviceCount: number
	//gpu列表
	devices: [
		{
			//GPU名字
			name: string
			//GPU温度
			temperature: number
			//GPU利用率
			utilizationRates: number
			//已使用显存大小 单位字节
			memoryUsed: number
			//未使用显存大小 单位字节
			memoryFree: number
			//总显存大小 单位字节
			memoryTotal: number
			//显卡功耗情况 单位毫瓦
			powerUsage: number
			//全球唯一UUID
			uuid: string
		}
	]
}
