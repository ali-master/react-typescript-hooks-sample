module.exports = {
	pro: true,
	ts: {
		extends: "./tsconfig.json",
	},
	node: "~/.nvm/versions/node/v12.3.1/bin/node",
	babel: {
		ts: true,
		polyfill: true,
		presets: ["react-app"],
		plugins: [
			[
				"import",
				{
					libraryName: "antd",
					libraryDirectory: "es",
					style: "css",
				},
			],
		],
	},
	plugins: ["jsdom-quokka-plugin", "alias-quokka-plugin"],
	alias: {
		src: "./src",
		assets: "./src/assets",
		state: "./src/state",
		hoc: "./src/HOC",
		hooks: "./src/hooks",
		styles: "./src/styles",
		helpers: "./src/helpers",
		screens: "./src/screens",
		services: "./src/services",
		components: "./src/components",
	},
	env: {
		params: {
			env: "BABEL_ENV=development",
		},
	},
};
