import express from 'express';
import {
  getFavorite,
  addFavorite,
  removeFavorite
} from '../controllers/favoriteController.js'
import isUserLoggedIn from '../middleware/verifyAuth.js'

const router = express.Router();

// Applying the isUserLoggedIn middleware to protect the routes
router.get('/favorite', isUserLoggedIn, getFavorite);
router.post('/favorite', isUserLoggedIn, addFavorite);
router.delete('/favorite', isUserLoggedIn, removeFavorite);

export default router

