<template>
	<div class="cpu">
		{{ hwData.cpu ? hwData.cpu.cpuList[0].vendor : "" }} - {{ hwData.cpu ? hwData.cpu.cpuList[0].model : "" }}
		<ul v-if="hwData.cpu">
			<li v-for="item in hwData.cpu.cpuList">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import { hwData } from "/@/data/data"

	export default defineComponent({
		setup() {
			return { hwData }
		}
	})
</script>

<style scoped></style>
