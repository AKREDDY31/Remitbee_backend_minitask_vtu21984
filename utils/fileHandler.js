const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');
const readData = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
module.exports = { readData, writeData };
