const express = require("express");

const app = express();
app.use(express.json());

const { addMessg, showmessg } = require("./main");

app.get("/user", async (req, res) => {
  const list = await showmessg();
  res.json(list);
});

app.post("/add-msg", async (req, res) => {
  const chat = req.body;
  await addMessg(chat);
  res.json({ message: "message added" });
});
app.listen(5000, () => console.log("Server started"));
