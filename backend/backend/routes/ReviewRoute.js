import express from 'express';
import {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
} from '../controllers/ReviewController.js';

const router = express.Router();

router.get('/reviews', getReviews);
router.get('/reviews/:productId/:userId', getReviewById); // Assuming composite key route
router.post('/reviews', createReview);
router.patch('/reviews/:productId/:userId', updateReview); // Assuming composite key route
router.delete('/reviews/:productId/:userId', deleteReview); // Assuming composite key route

export default router;
