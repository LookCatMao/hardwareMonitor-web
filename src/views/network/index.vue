<template>
	<div class="network" :class="{ active: showDetail }">
		<p class="head">
			<span class="title">网络</span>
			<span class="model">Killer E2500 Gigabit Ethernet Controller</span>
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"

	export default defineComponent({
		name: "Network",
		props: {
			showDetail: {
				type: Boolean,
				default: false
			}
		},
		setup() {
			return {}
		}
	})
</script>

<style lang="less" scoped>
	.network {
		position: absolute;
		top: 34.125rem /* 546/16 */;
		left: 60.375rem /* 966/16 */;
		width: 58.875rem /* 942/16 */;
		height: 32.625rem /* 522/16 */;
		background-color: #444444;
		padding: 1rem;
		.head {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			margin-bottom: 0.625rem /* 10/16 */;
			.title {
				font-size: 2rem /* 32/16 */;
			}
			.model {
				font-size: 1.125rem /* 18/16 */;
			}
		}
	}
</style>
