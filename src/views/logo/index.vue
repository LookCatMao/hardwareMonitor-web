<template>
	<div class="hw-logo">
		<img src="@/assets/images/logo.png" alt="" />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Logo",
		setup() {
			return {}
		}
	})
</script>

<style scoped>
	.hw-logo {
		width: 562px;
		height: 72px;
		position: absolute;
		left: 130px;
		top: 50px;
	}
</style>
