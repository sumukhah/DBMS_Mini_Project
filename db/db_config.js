var mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

connection.connect(function (err) {
  if (err) throw err;

  console.log(`Connected to mysql database ${process.env.DATABASE}`);
  let createAdmin = `create table if not exists admins(
    admin_id int primary key auto_increment,
    admin_phone_number int(10),
    password varchar(50),
    email varchar(50) unique
  )`;

  connection.query(createAdmin, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
});

module.exports = connection;
