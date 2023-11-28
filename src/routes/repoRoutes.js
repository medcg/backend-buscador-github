import express from 'express';
import * as repoController from '../controllers/repo.Controllers.js';

const router = express.Router();

router.post('/repo', repoController.createSearch);
router.get('/repo', repoController.getSearches);
router.get('/repo/:id', repoController.getSearchById);
router.put('/repo/:id', repoController.updateSearch);
router.delete('/repo/:id', repoController.deleteSearch);

export default router;
