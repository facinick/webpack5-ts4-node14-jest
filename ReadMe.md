
# node14-typescript4-webpack5-starter

A minimal ts node starter template with webpack5
## Dependencies

**Webpack 5**

**Typescript 4**

**Lint with ESLint and Format using Prettier**

**Run above linters on staged files using Lint Staged and Husky**
## Linting, Compiling and Building

Build prod bundle (commit this)

```bash
  npm run build:prod
```
Build dev bundle

```bash
  npm run build
```

Lint and type checking

You can use ```npm run lint:fix && npm run lint:fix && tsc --noEmit``` to pretty, lint and check types, although when you try to commit changes lint-staged automatically runs these commands on the staged files with extensions .ts .js and .json.

## Adding custom types

Explore files in 'src/dependency_types/ for how to extend types for modules with missing / partial types.

  
## License

[MIT](https://choosealicense.com/licenses/mit/)