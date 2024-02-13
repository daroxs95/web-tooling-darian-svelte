# Web tooling for a moder Todo list

A classic todo list with a modern approach.

The project is built with the following technologies:

- [Svelte](https://svelte.dev/)
- [Eslit](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [husky](https://typicode.github.io/husky)
- [vitest](https://vitest.dev/)
- [cordova](https://cordova.apache.org/)

## Getting started

### Development

To get started, clone the repository and run the following commands:

Initialize submodules:

```bash
git submodule update --init --recursive
```

```bash
npm install
```

```bash
npm run dev
```

### Production build

For production build, run:

```bash
npm run build
```

This generates a static build in the `dist` folder.

### Testing

For testing, run:

```bash
npm run test
```

Or for watching tests, run:

```bash
npm run test:watch
```

### Storybook

For booting up storybook, run:

```bash
npm run storybook
```

Latest storybook can be found [here](https://web-tooling-darian-svelte-storybook.surge.sh/)

## Releasing android app

Creating a release in github triggers an action to release the android app based on cordova.
