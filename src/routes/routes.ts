import express from 'express';
import { analyzeText, renderFreqLab } from '../controllers/analyzer.controller';
import { validateAnalyzeText } from '../middleware/validateText.middleware';
const router = express.Router();

router.get('/', renderFreqLab);
router.post('/api/analyze-text', validateAnalyzeText, analyzeText);

export default router;