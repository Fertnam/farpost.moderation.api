module.exports = {
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    },
}
