import express from 'express';
import * as repoController from '../controllers/repo.Controllers.js';

const router = express.Router();

router.post('/search', repoController.createSearch);
router.get('/search', repoController.getSearches);
router.get('/search/:id', repoController.getSearchById);
router.put('/search/:id', repoController.updateSearch);
router.delete('/search/:id', repoController.deleteSearch);

export default router;
