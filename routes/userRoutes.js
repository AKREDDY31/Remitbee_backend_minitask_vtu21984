// routes/userRoutes.js
// Defines all CRUD endpoints for users

const express = require('express');
const router = express.Router();

const {
  getUsers,
  addUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const validateUser = require('../middlewares/validateUser');

// CRUD routes
router.get('/', getUsers);          // GET /users
router.post('/', validateUser, addUser);  // POST /users (with validation)
router.put('/:id', validateUser, updateUser); // PUT /users/:id
router.delete('/:id', deleteUser);  // DELETE /users/:id

module.exports = router;
