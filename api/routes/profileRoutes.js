import express from 'express';
import {
  getProfiles,
  addProfile,
  updateProfile,
  deleteProfile
} from '../controllers/profileController.js'
import verifyAuth from '../middleware/verifyAuth.js'

const router = express.Router();


// Protected routes
router.post('/profile', addProfile) //addback verifyAuth
router.get('/profile', getProfiles) //addback verifyAuth
router.put('/profile', updateProfile) //addback verifyAuth
router.delete('/profile', deleteProfile) //addback verifyAuth

export default router;
