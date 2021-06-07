module.exports = {
    extends: ['standard', 'standard-react'],
    parser: 'babel-eslint',
    rules: {
        'react/prop-types': 0,
        'object-curly-spacing': ['error', 'never'],
        'jsx-quotes': ['error', 'prefer-double'],
        'comma-dangle': ['error', 'ignore'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ]
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        }
    }
}
