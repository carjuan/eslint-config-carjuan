# Eslint-config-carjuan

This is the base configuration used in my personal JavaScript projects:

It mainly:

- [x] Extends [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [x] Uses [Prettier](https://prettier.io/) for code formatting
- [x] Enforces [no-for-of-loops](https://www.npmjs.com/package/eslint-plugin-no-for-of-loops)

## Installation

1. Install the configuration using your favourite Node package manager.

### npm

```
npm install --save-dev eslint-config-carjuan eslint prettier
```

### yarn

```
yarn add -D eslint-config-carjuan eslint prettier
```

### pnpm

```
pnpm install -D eslint-config-carjuan eslint prettier
```

2. In your [ESLint configuration](https://eslint.org/docs/user-guide/configuring/)

```
// .eslintrc.*
{
  env: {
    // Your env
  }
  extends: "carjuan"
  rules:
  {
    // Your rules go here
  }
  ...
}
```
