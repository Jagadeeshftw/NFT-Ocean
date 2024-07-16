const sql = require("better-sqlite3");
const db = sql("nft.db");

// Ensure the table is created
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS nfts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       desc TEXT NOT NULL,
       image TEXT NOT NULL,
       price TEXT NOT NULL
    )
`
).run();

function initData(data: any) {
  const stmt = db.prepare(`
      INSERT INTO nfts (name, desc, image, price) VALUES (
         @name,
         @desc,
         @image,
         @price
      )
   `);

  stmt.run(data);
}

export default initData;
