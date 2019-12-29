A bare minimum react-typescript-hooks-sample boilerplate.

### Technoliges:
- React v^16.11.0
- React hooks and context lifting data between components
- Typescript
- Jest
- React-router
- Axios
- Scss
- Prettier
- Commitlint and lintstaged
- Eslint
- Editorconfig
- Ramda

Login username/password: `username=test` & `password=test`

## Directory Structure:
```bash
├── config
├── public
├── src
│   ├── components
│   ├── helpers
│   ├── hooks
│   ├── screens
│   ├── state
│   └── styles
├── build
├── README.md
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .nvmrc
├── .prettier
├── commitlint.config.js
├── tsconfig.json
├── jest.config.js
└── .gitignore
```

#### Screens folder
This folder is of great importance and its subfolders are depended on the routes structure that you have created. For namely if you have a route like this:
```js
http://localhost:3000/auth/login
```
So you have to create 2 subfolders into **screens** folder as below:
```bash
├── screens
│   ├── Auth
│   │   ├── Login
│   │   |   ├── index.tsx
|   |   | index.tsx
└── index.tsx
```

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
