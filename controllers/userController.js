const { readData, writeData } = require('../utils/fileHandler');

const getUsers = (req, res, next) => {
  try {
    const users = readData();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const addUser = (req, res, next) => {
  try {
    const users = readData();
    const { name, email, age } = req.body;

    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = { id: Date.now(), name, email, age };
    users.push(newUser);
    writeData(users);
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    next(error);
  }
};

const updateUser = (req, res, next) => {
  try {
    const users = readData();
    const { id } = req.params;
    const { name, email, age } = req.body;

    const index = users.findIndex(u => u.id == id);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found' });
    }

    users[index] = {
      ...users[index],
      name: name || users[index].name,
      email: email || users[index].email,
      age: age || users[index].age
    };

    writeData(users);
    res.json({ message: 'User updated successfully', user: users[index] });
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res, next) => {
  try {
    const users = readData();
    const { id } = req.params;

    const filtered = users.filter(u => u.id != id);
    if (filtered.length === users.length) {
      return res.status(404).json({ message: 'User not found' });
    }

    writeData(filtered);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
