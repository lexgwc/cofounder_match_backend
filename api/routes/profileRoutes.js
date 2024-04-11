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
router.post('/profile', verifyAuth, addProfile) //addback verifyAuth
router.get('/profile', verifyAuth, getProfiles) //addback verifyAuth
router.put('/profile', verifyAuth, updateProfile) //addback verifyAuth
router.delete('/profile', verifyAuth, deleteProfile) //addback verifyAuth

export default router;
