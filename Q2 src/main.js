const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbuser = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "connection",
};

// const chat = {
//     sender : "Atharva",
//     reciver : "ABC",
//     message: "Hello Everyone";
// }

const showmessg = async () => {
  const connection = mysql.createConnection(dbuser);
  await connection.connectAsync();

  const sql = `select * from MESSAGE`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();
  return list;
};

const addMessg = async (chat) => {
  const connection = mysql.createConnection(dbuser);
  await connection.connectAsync();

  const sql = `insert into MESSAGE  (sender, reciver, message) values (?, ? ,?)`;
  await connection.queryAsync(sql, [chat.sender, chat.reciver, chat.message]);
  console.log("record Added!!!");
  await connection.endAsync();
};

module.exports = { addMessg, showmessg };
