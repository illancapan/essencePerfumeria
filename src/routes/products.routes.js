import express from 'express'
import { productsController } from '../controllers/products.controllers.js'

const router = express.Router()

router.get('/perfumes', productsController.getProducts)
router.get('/perfumes/:id', productsController.getProductDetail)

//AGREGAR NUEVO PRODUCTO
// router.post('/perfumes', productsController.addProduct)
router.post('/perfumes', productsController.addProduct)

//ACTUALIZAR PRODUCTO
// router.put('/perfumes/:id', productsController.updateProduct)
router.put('/perfumes/:id', productsController.updateProduct)

export default router
