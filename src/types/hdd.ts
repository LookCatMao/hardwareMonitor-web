export interface hddType {
	//盘符 硬盘名称
	devName: string
	//盘符 硬盘名称
	dirName: string
	//保留字段
	flags: number
	//文件系统类型: FAT32、NTFS
	sysTypeName: string
	//文件系统类型名:本地硬盘、光驱、网络文件系统等
	typeName: string
	//保留字段 文件系统类型
	type: number
	//读出速度 单位:MB
	diskReads: number
	//写入速度 单位:MB
	diskWrites: number
	//文件系统总大小 GB
	total: number
	//文件系统剩余大小 GB
	free: number
	//文件系统可用大小 GB
	avail: number
	//文件系统已经使用量 GB
	used: number
	//文件系统资源的利用率
	usePercent: number
}
