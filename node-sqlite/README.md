# node:sqlite

Node.js introduced a native sqlite interface in v22.5.0 https://nodejs.org/api/sqlite.html

```
nvm use 22.5.0
```

### In memory

Creating, inserting, and querying a table in memory. This is the hello world example from the Node.js docs.

```sh
node --experimental-sqlite memory.mjs

# [
#   [Object: null prototype] { key: 1, value: 'hello' },
#   [Object: null prototype] { key: 2, value: 'world' }
# ]
```

### From a file

Reading from a file `wa-libraries.sqlite` and counting/ordering the numbner of libraries by city.

Source: https://data.wa.gov/dataset/Washington-Library-Locations/4aw2-b4zh/about_data

```sh
node --experimental-sqlite file.mjs

# [
#   { "LDLI_City": "Seattle", "count": 105 },
#   { "LDLI_City": "Tacoma", "count": 26 },
#   { "LDLI_City": "Spokane", "count": 24 },
#   { "LDLI_City": "Bellingham", "count": 13 },
#   { "LDLI_City": "Vancouver", "count": 12 },
#   { "LDLI_City": "Olympia", "count": 12 },
#   { "LDLI_City": "Walla Walla", "count": 10 },
#   { "LDLI_City": "Yakima", "count": 8 },
#   { "LDLI_City": "Lakewood", "count": 7 },
#   { "LDLI_City": "Shelton", "count": 6 },
#   { "LDLI_City": "Richland", "count": 6 },
#   { "LDLI_City": "Bellevue", "count": 6 }
# ]
```
