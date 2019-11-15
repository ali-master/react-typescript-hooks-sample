import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ConfigProvider } from "antd";
import enUS from "antd/es/locale-provider/en_US";

import * as serviceWorker from "./serviceWorker";

import "./styles/index.scss";

ReactDOM.render(
	<ConfigProvider locale={enUS}>
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
