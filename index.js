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
  try {
    const { id } = req.params;
    const data = getEnviramentById(id);
    res.status(200).send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = createEnvirament(label, category, priority);
    res.status(201).send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = updateEnvirament(id, label, category, priority);
    res.status(200).send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteEnvirament(id);
    res.status(200).send(data);
  } catch (error) {
    res.send(error.message);
  }
});


app.listen(3000, () => {
  console.log("server is runing on 3000 port");
});
