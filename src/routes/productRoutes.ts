import express from 'express'

// import class request and response from express
import { Request, Response } from "express"

//create instance router of express
const router = express.Router()

// set interface for product
interface Product {
    id: string
    name: string
    price: number
}

//create type array it is object
const products: Product[] = []

//GET /products for get all products
router.get('/products', (req: Request, res: Response): void => {
    res.json(products)
})

//get /product/:id for get product by id 
//http://localhost:3000/api/product/1
router.get('/products/:id', (req: Request, res: Response): void => {
    // console.log(req.params.id)
    //get id from params
    const id = req.params.id

    //find info from array products by id
    const product = products.find(product => product.id === id)

    //cant find product by id
    if (!product) {
        res.status(404).json({ message: 'Product not found' })
    }

    //send product back to client
    res.json(product)
})

//POST /products for create new product
router.post('/products', (req: Request, res: Response): void => {

    //get data request body from client
    if (!req.body) {
        res.status(400).json({ message: 'Missing request body' })
        return
    }

    const { id, name, price} = req.body

    //if no data status code 400 back to client
    if (!id || !name || !price) {
        res.status(400).json({ message: 'Missingf required fields: id, name, price ' })
        return
    }

    //add data to array products
    products.push({ id, name, price})

    //send response back to client
    res.json({message: 'Product add successfully'})

})

//PUT /products/:id for update product by id
router.put('/products/:id', (req: Request, res: Response): void => {

    const id = req.params.id

    //get data request body from client
    if (!req.body) {
        res.status(400).json({ message: 'Missing request body' })
        return
    }

    const { name, price } = req.body

    const product = products.find(product => product.id === id)

    if (!product) {
        res.status(404).json({ message: 'Product not found' })
        return
    }

    //edit data in array products
        product.name = name
        product.price = price

    //send response back to client
    res.json({message: 'Product updated successfully'})

})

//DELETE /products/:id for delete product by id
router.delete('/products/:id', (req: Request, res: Response): void => {

    const id = req.params.id

    const index = products.findIndex(product => product.id === id)

    if ( index === -1) {
        res.status(404).json({ message: 'Product not found'})    
        return
    }

    products.splice(index, 1)

    res.json({ message: 'Product deleted successfully' })
})


export default router