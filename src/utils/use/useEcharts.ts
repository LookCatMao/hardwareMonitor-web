import { computed, nextTick, ref, Ref, unref } from "vue"
import * as echarts from "echarts"
import type { EChartsOption } from "echarts"
import { tryOnUnmounted, useDebounceFn, useTimeoutFn } from "@vueuse/core"
import { useEventListener } from "@/utils/use/useEventListener"

export function useECharts(elRef: Ref<HTMLDivElement>) {
	// 表格实例存放
	let chartInstance: echarts.ECharts | null = null
	// resize方法默认指向
	let resizeFn: any = resize
	// Echarts配置暂存
	const cacheOptions = ref({}) as Ref<EChartsOption>
	// 销毁resize监听默认函数
	let removeResizeFn: any = () => {}

	// 使用防抖注册resize方法
	resizeFn = useDebounceFn(resize, 200)

	// 整合返回配置项
	const getOptions = computed(() => {
		return cacheOptions.value as EChartsOption
	})

	// 初始化 Echarts实例
	function initCharts() {
		const el = unref(elRef)
		if (!el || !unref(el)) {
			return
		}
		// 注册 Echarts 实例
		// chartInstance = echarts.init(el, "", { renderer: "svg" })
		chartInstance = echarts.init(el)
		const { removeEvent } = useEventListener({
			el: window,
			name: "resize",
			listener: resizeFn
		})
		// 销毁方法赋值
		removeResizeFn = removeEvent
	}

	function setOptions(options: EChartsOption, clear = false) {
		cacheOptions.value = options
		if (unref(elRef)?.offsetHeight === 0) {
			useTimeoutFn(() => {
				setOptions(unref(getOptions))
			}, 30)
			return
		}
		nextTick(() => {
			useTimeoutFn(() => {
				if (!chartInstance) {
					initCharts()
					if (!chartInstance) return
				}
				clear && chartInstance?.clear()

				chartInstance?.setOption(unref(getOptions))
			}, 30)
		})
	}

	// Echarts实例 resize
	function resize() {
		chartInstance?.resize()
	}

	tryOnUnmounted(() => {
		if (!chartInstance) return
		removeResizeFn()
		chartInstance.dispose()
		chartInstance = null
	})

	// 获取echarts实例
	function getInstance(): echarts.ECharts | null {
		if (!chartInstance) {
			initCharts()
		}
		return chartInstance
	}

	return {
		setOptions,
		resize,
		echarts,
		getInstance
	}
}
