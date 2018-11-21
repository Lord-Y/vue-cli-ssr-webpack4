module.exports = {
	parserOptions: {
		sourceType: "module",
		"ecmaVersion": 2017,
		"parser": "babel-eslint"
	},
	"extends": "plugin:vue/strongly-recommended",
	plugins: [
		"vue"
	],
	settings: {
		"import/resolver": {
			"webpack": {
				"config": "build/webpack.base.conf.js"
			}
		}
	},

	// add your custom rules here
	rules: {
		"vue/html-self-closing": 2,
		// "vue/html-closing-bracket-newline": 0,
		"vue/no-template-shadow": 0,
		"vue/attribute-hyphenation": 0,
		"vue/no-use-v-if-with-v-for": 0,
		// // don't allow semicolons
		// "semi": ["error", "never"],

		// // don"t require comma in the last line of an object/dictionary declaration
		// "comma-dangle": ["error", "never"],

		// // ignore max-len for comments
		// "max-len": [
		// 	"error",
		// 	{ "code": 1000, "ignoreComments": true, "ignoreTrailingComments": true, "ignoreUrls": true, "ignoreStrings": true }
		// ],

		// // force space after and before curly braces in object/dict declarations
		// "object-curly-spacing": ["error", "always"],

		// // allow debugger; instruction during development
		// "no-debugger": "production" ? 2 : 0,

		// // force "===" in comparisons when ambiguous
		// "eqeqeq": ["error", "smart"],

		// // force double quotes
		// "quotes": ["error", "double"],
		// "indent": ["error", "tab", { "SwitchCase": 1, "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }],
		"space-before-function-paren": ["error", "never"],
		// "no-tabs": 0,
		// "require-jsdoc": 0,
		// "new-cap": ["error", { "capIsNew": false }],
		// "no-unused-vars": 0,
		// "func-style": [1, 'declaration', { allowArrowFunctions: true }],
		// "no-mixed-spaces-and-tabs": 0,
		// "no-unused-expressions": 0,
		// "qeqeq": [0, 'smart'],
		// "no-var": 0,
	}
}
