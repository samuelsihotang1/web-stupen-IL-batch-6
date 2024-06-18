import express from 'express';
import {
    getCarts,
    getCartById,
    createCart,
    updateCart,
    deleteCart
} from '../controllers/CartController.js';

const router = express.Router();

router.get('/carts', getCarts);
router.get('/carts/:productId/:userId', getCartById); // Assuming composite key route
router.post('/carts', createCart);
router.patch('/carts/:productId/:userId', updateCart); // Assuming composite key route
router.delete('/carts/:productId/:userId', deleteCart); // Assuming composite key route

export default router;
