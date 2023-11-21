import express from 'express';
import * as searchController from '../controllers/search.Controllers.js';

const router = express.Router();

router.post('/search', searchController.createSearch);
router.get('/search', searchController.getSearches);
router.get('/search/:id', searchController.getSearchById);
router.put('/search/:id', searchController.updateSearch);
router.delete('/search/:id', searchController.deleteSearch);

export default router;
