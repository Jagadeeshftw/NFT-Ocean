const sql = require("better-sqlite3");
const db = sql("userDetails.db");

// Ensure the table is created
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       address TEXT NOT NULL,
       name TEXT NOT NULL,
       email TEXT NOT NULL
   )
`
).run();

function initData(data) {
  const stmt = db.prepare(`
      INSERT INTO users (address, name, email) VALUES (
         @address,
         @name,
         @email
      )
   `);

  stmt.run(data);
}

module.exports = initData;
