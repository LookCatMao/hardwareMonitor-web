import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import "./base.less"
document.oncontextmenu = function () {
	return false
}

// import "/@/utils/dataSource"

createApp(App).mount("#app")
