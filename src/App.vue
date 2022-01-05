<template>
	<div id="app">
		<AutoFitContainer>
			<div class="hw-container">
				<Logo />
				<Cpu />
				<Gpu />
				<Ram />
				<Foot />
			</div>
		</AutoFitContainer>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import AutoFitContainer from "/@/components/AutoFitContainer/index.vue"
	import Logo from "/@/views/logo/index.vue"
	import Cpu from "/@/views/cpu/index.vue"
	import Gpu from "/@/views/gpu/index.vue"
	import Ram from "/@/views/ram/index.vue"
	import Foot from "/@/views/foot/index.vue"
	export default defineComponent({
		components: { Foot, Ram, Gpu, Cpu, Logo, AutoFitContainer },
		setup() {
			return {}
		}
	})
</script>

<style lang="less">
	html,
	body {
		overflow: hidden auto;
		height: 100%;
		width: 100%;
		transform: translateZ(0);
		user-select: none;
		color: #fff;
	}
	#app {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hw-container {
		height: 100%;
		width: 100%;
		background-image: url("@/assets/images/background.png");
		background-size: 100%;
		background-color: #000;
	}
</style>
