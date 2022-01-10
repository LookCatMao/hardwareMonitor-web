<template>
	<div class="hw-storage">
		<ul class="disk-list">
			<DiskItem />
			<DiskItem />
			<DiskItem />
			<DiskItem />
		</ul>
		<div class="disk-count">
			<p>TOTAL 4 DEVICES</p>
		</div>
		<div class="disk-status">
			<div class="io">I/O</div>
			<div class="read">READ</div>
			<div class="write">WRITE</div>
		</div>
		<div class="type">STORAGE</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import DiskItem from "/@/views/storage/item.vue"

	export default defineComponent({
		name: "Storage",
		components: { DiskItem },
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	@import "style";
</style>
