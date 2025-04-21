import express from 'express'
import * as productController from '../controllers/productController'

//create instance router of express
const router = express.Router()

//GET /products for get all products    
//http://localhost:3000/api/products
router.get('/products', productController.getAllProducts)

//get /products/:id for get product by id
//http://localhost:3000/api/products/1
router.get('/products/:id', productController.getProductById)

//post create product
//httpr://localhost:3000/api/products
router.post('/products', productController.createProduct)

//put update product
//http://localhost:3000/api/products/1
router.put('/products/:id', productController.updateProduct)

//delete 
//http://localhost:3000/api/products/1
router.delete('/products/:id', productController.deleteProduct)

export default router

