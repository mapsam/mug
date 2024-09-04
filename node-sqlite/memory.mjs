import { DatabaseSync } from 'node:sqlite';

// in memory
const memDb = new DatabaseSync(':memory:');
memDb.exec(`
  CREATE TABLE data(
    key INTEGER PRIMARY KEY,
    value TEXT
  ) STRICT
`);

const insert = memDb.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
insert.run(1, 'hello');
insert.run(2, 'world');

const query = memDb.prepare('SELECT * FROM data ORDER BY key');
console.log(query.all());
