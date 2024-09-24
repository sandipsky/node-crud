// routes/userRoutes.js
const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to get all users
router.get('/', getUsers);

// Route to get a user by ID
router.get('/:id', getUserById);

// Route to update a user by ID
router.put('/:id', updateUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
