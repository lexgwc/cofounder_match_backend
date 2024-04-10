import express from 'express';
import {
  getSchools
} from '../controllers/schoolController.js'

const router = express.Router();

// Routes
router.get('/school', getSchools)

export default router;