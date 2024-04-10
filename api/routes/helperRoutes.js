import express from 'express';
import {
  getIndustryInterests,
  getAreasOfResponsibility,
  getHasIdea,
  getTimelineForFulltime
} from '../controllers/helperController.js'

const router = express.Router();

// Routes
router.get('/industries', getIndustryInterests)
router.get('/responsibilities', getAreasOfResponsibility)
router.get('/idea', getHasIdea)
router.get('/timeline', getTimelineForFulltime)

export default router;