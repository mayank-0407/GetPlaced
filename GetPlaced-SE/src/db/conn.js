const mysql = require("mysql");
const path = require("path");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "m@1710",
  database: "getplaceddb",
};

const my_conn = mysql.createConnection(dbConfig);

my_conn.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});
