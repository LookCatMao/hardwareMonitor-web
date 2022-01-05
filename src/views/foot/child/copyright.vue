<template>
	<div class="hw-copyright">
		<!--<p class="design-copyright">ELEMENTS FROM CYBERPUNK 2077</p>-->
		<p class="version">PREVIEW VERSION</p>
		<p class="design">CYBERPUNK ELEMENTS</p>
		<p class="developer">DEV BY CURITIS. CATMAO</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Copyright",
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	.hw-copyright {
		width: 200px;
		position: absolute;
		right: 0;
		bottom: 0;
		text-align: right;
		font-family: "Agency FB", serif;
		font-weight: bold;
		color: #f7ea00;
		font-size: 22px;
		line-height: 1.15;
	}
</style>
