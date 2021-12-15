export interface memoryType {
	//总内存大小 单位：GB
	total: number
	//已使用内存大小 单位：GB
	used: number
	//未使用内存大小 单位：GB
	free: number
	//交换区总大小 单位：GB
	swapTotal: number
	//交换区使用大小 单位：GB
	swapUsed: number
	//未使用交换区大小 单位：GB
	swapFree: number
}
