import { DatabaseSync } from 'node:sqlite';

const libraryDb = new DatabaseSync('./wa-libraries.sqlite');
const byCity = libraryDb.prepare(`
  SELECT 
    LDLI_City,
    COUNT(0) as count
  FROM Washington_Library_Locations 
  GROUP BY 1
  HAVING count > 5
  ORDER BY 2 DESC
`);
console.log(JSON.stringify(byCity.all(), null, 2));
