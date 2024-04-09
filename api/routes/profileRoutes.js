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
router.post('/profile', verifyAuth, addProfile)
router.get('/profile', verifyAuth, getProfiles) 
router.put('/profile', verifyAuth, updateProfile)
router.delete('/profile', verifyAuth, deleteProfile) 

export default router;
