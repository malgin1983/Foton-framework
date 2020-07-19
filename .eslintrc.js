module.exports = {
	env: {
		es2020: true,
		node: true,
		mocha: true
	},
	parser: "babel-eslint",
	extends: ['eslint:recommended', 'google', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: ['prettier'],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// "@typescript-eslint/explicit-function-return-type": "off",
		'max-len': ['error', { code: 120, ignoreComments: true, ignoreStrings: true }],
		'react/prop-types': 0,
		semi: ['error', 'never'],
		'arrow-parens': ['error', 'as-needed'],
		'comma-dangle': ['error', 'never'],
		'require-jsdoc': 'off',
		'operator-linebreak': ['error', 'before'],
		'prettier/prettier': [
			'error',
			{
				parser: 'typescript',
				singleQuote: true,
				tabWidth: 4,
				trailingComma: 'none',
				semi: false,
				arrowParens: 'avoid',
				printWidth: 120
			}
		]
	}
}
