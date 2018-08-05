# VUE-CLI-SSR-WEBPACK4

> A Vue.js project.

This project contain:
* SSR (Server Side Rendering)
* EsLint
* Webpack4
* Vuex
* Meta tags
* Environment setup

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8889
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Running production
npm sart
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Lint the code

Here are requirements to lint your code:
``` bash
sudo npm i -g eslint-config-google eslint-plugin-html eslint
```
If the compilation failed, you can do:
``` bash
eslint --fix FILENAME
```
If you're using `vscode` you can lint your code after saving your file by installing `vetur` and `eslint` and then add this to your `User Settings`:
```
"vetur.format.defaultFormatter.js": "vscode-typescript",
"vetur.format.defaultFormatter.html": "js-beautify-html",
"javascript.format.insertSpaceBeforeFunctionParenthesis": true,
"eslint.autoFixOnSave": true,
"eslint.validate": [
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "html",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    }
]
```
Then code/open your `vscode` and you're ready to go :)

## Environment

By default, dev file is loaded, to define your production environment, go to `config` directory and then do
```bash
cp -p prod.env.js env.js
```

## What's not working by default but by tweaking
Some packages doesn't work after compilations like spinners. You can still make them works by whitelist them in `build/webpack.server.config.js`
```
externals: nodeExternals({
		whitelist: [/\.css$/, /^vue-loading-spinner/, /^vue-spinner/]
	}),
```

## Not working

Packages like `vue-loading-spinner` are not fully working

## Todos

* Get rid of `webpack` build messages on the console
* Same for `vue-loading-spinner`

## Shoutouts
Shoutout to these projects who inspire me for my purpose:
* [crisbal/vue-webpack-ssr-fully-featured](https://github.com/crisbal/vue-webpack-ssr-fully-featured)
* [vue-cli-ssr](https://github.com/cgygd/vue-cli-ssr)
* [doabit/vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit)
* [devCrossNet/vue-starter](https://github.com/devCrossNet/vue-starter)
* [jqEmprendedorVE/vue-firebase-ssr](https://github.com/jqEmprendedorVE/vue-firebase-ssr)
