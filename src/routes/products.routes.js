import express from 'express';
import { productsController } from '../controllers/products.controllers.js';

const router = express.Router();

router.get('/perfumes', productsController.getData)
router.get('/perfumes/:id', productsController.getProductDetail)


export default router;
