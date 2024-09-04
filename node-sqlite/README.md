# node:sqlite

Node.js introduced a native sqlite interface in v22.5.0 https://nodejs.org/api/sqlite.html

```sh
nvm use 22.5.0
node --experimental-sqlite index.mjs

# [
#   [Object: null prototype] { key: 1, value: 'hello' },
#   [Object: null prototype] { key: 2, value: 'world' }
# ]
```
