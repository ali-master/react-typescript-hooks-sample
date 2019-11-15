module.exports = {
	"src/**/*.{js,jsx,ts,tsx}": [ "npm run test:ci", "prettier --write", "git add" ],
	"src/**/*.{css,scss}": [ "prettier --write", "git add" ],
	"*.{json,md}": [ "prettier --write", "git add" ]
};
