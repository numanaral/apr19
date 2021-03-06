const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @typedef {Object} ESLintRules
 * @property {import('eslint/rules').ESLintRules} rules
 * @typedef {import('eslint').Linter.Config&ESLintRules} ESLintConfig
 */

/**
 * @type {ESLintConfig}
 */
module.exports = {
	env: {
		browser: true,
		es6: true,
		// es2021: true,
	},
	extends: [
		'react-app',
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
				paths: ['./src'],
			},
		},
	},
	rules: {
		'arrow-parens': [ERROR, 'as-needed'],
		'default-case': [ERROR, { commentPattern: 'No Default' }],
		'no-param-reassign': [
			ERROR,
			{
				props: true,
				ignorePropertyModificationsFor: ['draft', 'acc'],
				ignorePropertyModificationsForRegex: ['[Rr]ef$'],
			},
		],
		'import/no-named-as-default': OFF,
		'import/no-unresolved': [ERROR, { caseSensitive: false }],
		'import/prefer-default-export': OFF,
		'max-len': [
			ERROR,
			{
				// Ignore import lines and jsx props
				// \w+=".*$ doesn't work
				ignorePattern: '^import .*|S*w*=".*$',
				ignoreComments: true,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				ignoreTrailingComments: true,
				ignoreTemplateLiterals: true,
			},
		],
		'no-alert': OFF,
		'no-console': OFF,
		'no-continue': OFF,
		'no-debugger': OFF,
		'no-plusplus': OFF,
		'no-tabs': OFF,
		'no-underscore-dangle': OFF,
		'no-unused-vars': WARN,
		'react-hooks/exhaustive-deps': WARN, // Checks effect dependencies
		'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
		'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': [ERROR, 'tab'],
		'react/jsx-indent-props': [ERROR, 'tab'],
		'react/jsx-props-no-spreading': OFF,
		'react/no-array-index-key': OFF,
		'react/react-in-jsx-scope': OFF,
		'react/prop-types': OFF,
		'prettier/prettier': ERROR,
		camelcase: OFF,
	},
};
