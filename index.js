const express = require("express");
const {
  getAllEnvirament,
  getEnviramentById,
  createEnvirament,
  updateEnvirament,
  deleteEnvirament,
} = require("./service");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const data = getAllEnvirament();
  res.status(200).send(data);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = getEnviramentById(id);
  res.status(200).send(data);
});

app.post("/", (req, res) => {
  const { label, category, priority } = req.body;
  const data = createEnvirament(label, category, priority);
  res.status(201).send(data);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { label, category, priority } = req.body;
  const data = updateEnvirament(id, label, category, priority);
  res.status(200).send(data);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const data = deleteEnvirament(id);
  res.status(200).send(data);
});

app.listen(3000, () => {
  console.log("server is runing on 3000 port");
});
