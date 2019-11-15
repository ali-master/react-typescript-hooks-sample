const path = require("path");

module.exports = {
	src: path.resolve(__dirname, "../src"),
	assets: path.resolve(__dirname, "../src/assets"),
	state: path.resolve(__dirname, "../src/state"),
	hoc: path.resolve(__dirname, "../src/hoc"),
	hooks: path.resolve(__dirname, "../src/hooks"),
	styles: path.resolve(__dirname, "../src/styles"),
	helpers: path.resolve(__dirname, "../src/helpers"),
	screens: path.resolve(__dirname, "../src/screens"),
	services: path.resolve(__dirname, "../src/services"),
	components: path.resolve(__dirname, "../src/components"),
	"package.json": path.resolve(__dirname, "..", "package.json"),
};
