// 根据键值对查找出整个对象
export function objectFind(obj: any, value: any, key: string) {
	const index = obj.findIndex((item) => item[key] == value)
	if (index >= 0) return obj[index]
}
