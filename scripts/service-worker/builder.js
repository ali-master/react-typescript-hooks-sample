const path = require("path");
const { injectManifest } = require("workbox-build");

const buildPath = path.join(__dirname, "../../build/");
const workboxConfig = {
	globDirectory: buildPath,
	exclude: ["service-worker.js"],
	swSrc: "./sw-template.js",
	swDest: path.resolve(buildPath, "service-worker.js"),
};

injectManifest(workboxConfig).then(({ count, size }) => {
	console.log(`Generated ${workboxConfig.swDest}, which will precache ${count} files, totaling ${size} bytes.`);
});
