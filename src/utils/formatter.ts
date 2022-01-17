// 数字拆分
export function numberSeparator(num: string | number) {
	const numArr = String(num).split(".")
	const reg = /(?=(\B)(\d{3})+$)/g
	if (numArr.length === 1) {
		return num.toString().replace(reg, ",")
	} else {
		return numArr[0].toString().replace(reg, ",") + `.${numArr[1]}`
	}
}

// 简化数字计数
export function numberReduce(num: number, fixedDig = 0) {
	const dividend = 10000 // 数字间距
	const units = ["", "万", "亿", "万亿"] // 间距单位
	let currentNum = num
	let currentUnit = units[0]
	for (let i = 0; i < 4; i++) {
		currentUnit = units[i]
		if (strNumSize(currentNum) < 5) {
			break
		}
		currentNum = currentNum / dividend
	}
	return {
		value: currentNum.toFixed(fixedDig),
		unit: currentUnit
	}
}

function strNumSize(tempNum: number) {
	const stringNum = tempNum.toString()
	const index = stringNum.indexOf(".")
	let newNum = stringNum
	if (index != -1) {
		newNum = stringNum.substring(0, index)
	}
	return newNum.length
}
//数字补零
export function PrefixZero(num, n) {
	return (Array(n).join("0") + num).slice(-n)
}
