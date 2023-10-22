const fs = require("fs");
const path = "./storage/envirament.json";

function getAllEnvirament() {
  const array = JSON.parse(fs.readFileSync(path));
  return array;
}

function getEnviramentById(id) {
  const array = JSON.parse(fs.readFileSync(path));
  const filtered = array.filter((el) => el.id == id);
  return filtered;
}

function createEnvirament(label, category, priority) {
  const item = {
    id: label.toLowerCase(),
    label: label,
    category: category,
    priority: priority,
  };
  const array = JSON.parse(fs.readFileSync(path));
  array.push(item);
  fs.writeFileSync(path, JSON.stringify(array));
  return array;
}

function updateEnvirament(id, label, category, priority) {
  const array = JSON.parse(fs.readFileSync(path));
  const filtered = array.filter((el) => el.id != id);
  if (filtered.length == array.length) return "id is not found";
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
  if (filtered.length == array.length) return "id is not found";
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = {
  getAllEnvirament,
  getEnviramentById,
  createEnvirament,
  updateEnvirament,
  deleteEnvirament
};
