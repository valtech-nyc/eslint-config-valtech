# eslint-config-valtech

This repository houses the shared ESLint configuration for Valtech's front-end team.

## How to Use

This configuration is designed to be used with [ESLint][]. In order to use it in your project, first install the npm module:

```bash
npm install --save-dev eslint-config-valtech
```

That will add the configuration to your `package.json`. From there, extend the ESLint ruleset by adding this to your `.eslintrc` file:

```js
"extends": "valtech"
```

You can extend it with your own rules and configuration. See the [ESLint docs][] for more information.

  [ESLint]: http://eslint.org/
  [ESLint docs]: http://eslint.org/docs/user-guide/configuring
