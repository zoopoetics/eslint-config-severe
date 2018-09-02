## What is this?

A reusable ESLint configuration that incorporates the following:

- [ESLint core rules](https://eslint.org/docs/rules/)
- [`eslint-plugin-array-func`](https://github.com/freaktechnik/eslint-plugin-array-func)
- [`eslint-plugin-eslint-comments`](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [`eslint-plugin-filenames`](https://github.com/selaux/eslint-plugin-filenames)
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [`eslint-plugin-lean-imports`](https://github.com/eslint-plugins/eslint-plugin-lean-imports)
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)

## What problem does it solve?

You probably don't need this. It's my preferred JS linting configuration for React projects, and I publish it to NPM so that it's easy to reuse across projects. It's severe because it enables almost every rule from the above packages. If Werner Herzog himself were to configure a linter, this is how severe it would be.

## Installation

`eslint-config-severe` is intended to be installed from NPM and then configured into a React app.

```
yarn add --dev eslint-config-severe
```

Then in the root of your project, create an `.eslintrc.js` file containing this:

```
module.exports = {
  extends: ['severe'],
};
```

Of course, there you can add whatever other configuration items you want. You can include other plugins, for example, or override any of the rules coming from `severe`. If you're not sure how that works, check out the [ESLint configuration docs](https://eslint.org/docs/user-guide/configuring).

## Usage

I write code in Atom, and I configure the `atom-prettier` package to run Prettier and then ESLint every time I hit save. This works well enough for me, but of course there are many other ways to do it.
