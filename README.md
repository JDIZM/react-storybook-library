# react-storybook-library

1. storybook
2. react
3. typescript
4. vite

## Docs

- https://storybook.js.org/docs/react/writing-stories/introduction
- https://vitejs.dev/guide/build.html#library-mode
- https://vitejs.dev/config/build-options.html#build-lib

## setup

```
# install
npm i

# view the storybook
npm run storybook
```

To test the library components you can import them in test.jsx. This file is imported as a module directly in index.html.

```
# run vite dev server
npm run dev
```

All you need to do to use the library components is to import them directly from the dist folder in this package.

```
import "./dist/style.css";
import { Button } from "./dist/my-lib.es";
```

Note: package.json type is set to "commonjs" for storybook
