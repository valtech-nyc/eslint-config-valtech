module.exports = {
    'plugins': [
        'jsdoc'
    ],
    'rules': {
        'curly': [2, 'all'],
        'eqeqeq': 2,
        'wrap-iife': 2,
        'no-use-before-define': [2, {
            'functions': false
        }],
        'no-caller': 2,
        'no-irregular-whitespace': 2,
        'no-undef': 2,
        'no-unused-vars': 2,
        'no-console': 1,
        'no-alert': 1,
        'linebreak-style': [2, 'unix'],
        'comma-style': [2, 'last'],
        'dot-notation': 2,
        'no-empty': 2,
        'no-spaced-func': 2,
        'array-bracket-spacing': [2, 'never'],
        'space-in-parens': [2, 'never'],
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'object-curly-spacing': [2, 'always'],
        'space-unary-ops': [2, {
            'words': false,
            'nonwords': false
        }],
        'one-var': [2, {
            'uninitialized': 'always',
            'initialized': 'never'
        }],
        'no-mixed-spaces-and-tabs': 2,
        'no-trailing-spaces': 2,
        'no-with': 2,
        'brace-style': 2,
        'no-multiple-empty-lines': 2,
        'no-multi-str': 2,
        'space-before-blocks': [2, 'always'],
        'space-infix-ops': 2,
        'camelcase': [2, {
            'properties': 'never'
        }],
        'eol-last': 2,
        'keyword-spacing': [2, {
            'overrides': {
                'if': {
                    'after': true
                },
                'else': {
                    'after': true
                },
                'for': {
                    'after': true
                },
                'while': {
                    'after': true
                },
                'do': {
                    'after': true
                },
                'switch': {
                    'after': true
                },
                'case': {
                    'after': true
                },
                'return': {
                    'after': true
                },
                'try': {
                    'after': true
                },
                'catch': {
                    'after': true
                },
                'typeof': {
                    'after': true
                }
            }
        }],
        'lines-around-comment': [2, {
            'beforeBlockComment': true,
            'afterBlockComment': false,
            'beforeLineComment': false,
            'afterLineComment': false,
            'allowBlockStart': true,
            'allowObjectStart': true,
            'allowArrayStart': true
        }],
        'semi': [2, 'always'],
        'consistent-this': [2, 'self'],
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        'valid-jsdoc': [1, {
            'prefer': {
                'return': 'returns'
            },
            'requireReturn': false
        }],
        'jsdoc/require-hyphen-before-param-description': 1
    }
};
