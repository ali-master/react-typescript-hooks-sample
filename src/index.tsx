import "react-app-polyfill/ie11";
import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ConfigProvider } from "antd";
import faIR from "antd/es/locale-provider/fa_IR";

import * as serviceWorker from "./serviceWorker";

import "./styles/index.scss";

ReactDOM.render(
	<ConfigProvider locale={faIR}>
		<App />
	</ConfigProvider>,
	document.getElementById("root") as HTMLElement,
);

if (process.env.NODE_ENV === "production") {
	serviceWorker.register({
		onUpdate() {
			const newUpdateEvent = new Event("newContentAvailble");

			window.dispatchEvent(newUpdateEvent);
		},
	});
} else {
	serviceWorker.unregister();
}
