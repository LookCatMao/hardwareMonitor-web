import { ref } from "vue"

export const configSize = Object.freeze({
	width: 1080,
	height: 1920
})

export const ratio = ref(1)

export const width = ref(1080)
export const height = ref(1920)
export const onload = ref(false)

// 计算配置长宽比
const configAspectRatio = configSize.width / configSize.height

// TODO: 有概率出现宽度模式与高度模式瞬时切换的BUG
// TODO: 原生分辨率作为配置项引入
// TODO: rem2px小于12时发出警告
export function calcSize() {
	// 计算窗口长宽比
	const aspectRatio = window.innerWidth / window.innerHeight
	// 根据长宽比使用不同基准缩放值
	if (aspectRatio > configAspectRatio) {
		// 使用窗口高度作为缩放基准
		ratio.value = window.innerHeight / configSize.height
		console.log("basic height", ratio.value)
	} else {
		// 使用窗口宽度作为缩放基准
		ratio.value = window.innerWidth / configSize.width
		console.log("basic width", ratio.value)
	}
	// onload
	if (!onload.value) {
		onload.value = true
	}

	// const wrapperWidth = width.value
	// const wrapperHeight = height.value
	// const widthScale = window.innerWidth / wrapperWidth
	// const heightScale = window.innerHeight / wrapperHeight
	// if (wrapperWidth * widthScale <= window.innerWidth && wrapperHeight * widthScale <= window.innerHeight) {
	// 	// 使用宽度比例作为计算基准
	// 	width.value = wrapperWidth * widthScale
	// 	height.value = wrapperHeight * widthScale
	// } else {
	// 	// 使用高度比例作为计算基准
	// 	width.value = wrapperWidth * heightScale
	// 	height.value = wrapperHeight * heightScale
	// }
	// const scale = width.value / 1080
	// document.documentElement.style.fontSize = 16 * Math.min(scale, 10) + "px"
	onload.value = true
}
