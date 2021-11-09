window.__CONF__ = {
	// API_URL: "http://192.168.100.1:8090",
	API_URL: "http://192.168.16.174:8090",
	// API_URL: "",
	API_URL_PREFIX: "/v1",
	PH_LIMIT_MAX: 8.5,
	PH_LIMIT_MIN: 6.5,
	PH_COLOR_LIST: ["#e7676d", "#047ffa", "#462c83"]
}
Object.freeze(window.__CONF__)
Object.defineProperty(window, "__CONF__", { configurable: false, writable: false })
