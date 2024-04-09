import express from 'express';
import {
  updateUser,
  deleteUser
} from '../controllers/userController.js'
import verifyAuth from '../middleware/verifyAuth.js'

const router = express.Router();

// Routes for User model, with isUserLoggedIn middleware to protect the routes
router.put('/user', verifyAuth, updateUser)
router.delete('/user', verifyAuth, deleteUser) 

export default router;
