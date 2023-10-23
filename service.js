const fs = require("fs");
const path = "./storage/envirament.json";

function getAllEnvirament() {
  const array = JSON.parse(fs.readFileSync(path));
  return array;
}

function getEnviramentById(id) {
  const array = JSON.parse(fs.readFileSync(path));
  const filtered = array.filter((el) => el.id == id);
  if (filtered.length==0)
    throw new Error("такого ID нет в баззе данных");
  return filtered;
}

function createEnvirament(label, category, priority) {
  const item = {
    id: label.toLowerCase(),
    label: label,
    category: category,
    priority: priority,
  };
  const filtered = array.filter((el) => el.id != item.id);
  if (filtered.length != array.length)
    throw new Error("обьескт с таким ID уже сужествует");
  const array = JSON.parse(fs.readFileSync(path));
  array.push(item);
  fs.writeFileSync(path, JSON.stringify(array));
  return array;
}

function updateEnvirament(id, label, category, priority) {
  const array = JSON.parse(fs.readFileSync(path));
  const filtered = array.filter((el) => el.id != id);
  if (filtered.length == array.length)
    throw new Error("в массиве нет такого ID");
  const item = {
    id: id,
    label: label,
    category: category,
    priority: priority,
  };
  filtered.push(item);
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function deleteEnvirament(id) {
  const array = JSON.parse(fs.readFileSync(path));
  const filtered = array.filter((el) => el.id != id);
  if (filtered.length == array.length)
    throw new Error("в массиве нет такого ID");
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = {
  getAllEnvirament,
  getEnviramentById,
  createEnvirament,
  updateEnvirament,
  deleteEnvirament,
};
