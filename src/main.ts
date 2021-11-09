import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import "@/utils/rem"
import "./base.less"
document.oncontextmenu = function () {
	return false
}

createApp(App).mount("#app")
