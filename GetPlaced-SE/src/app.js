const express = require("express");
const app = express();
const port = process.env.port || 3000;
const md5 = require("md5");
const mysql = require("mysql");
const path = require("path");

// database
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
// database

app.set("view engine", "hbs");

// const User = require("./models/register");
const { json } = require("express");
const res = require("express/lib/response.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  var pass1 = md5(req.body.pass1).toString();
  var dataAry = [req.body.email, pass1,];
  my_conn.query(
    "select * from User where Email=? and User_password=?",
    dataAry,
    (e, result)=> {
      if (e) {
        console.log(e);
        res.status(404).send(e);
      }
      if (result.length === 0) {
        res.status(401).send('Invalid username or password');
        return;
      }
       else res.status(200).render("dashboard");
    }
  );
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  var pass1 = md5(req.body.pass1).toString();
  var dataAry = [
    req.body.email,
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    pass1,
  ];
  my_conn.query(
    "insert into User(Username,First_name,Last_name,Email,User_password) values(?,?,?,?,?)",
    dataAry,
    (e, result) => {
      if (e) res.status(404).send(e);
      else {
        return res.status(200).render("login");
      }
    }
  );
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log("Listening at port ", port);
});
