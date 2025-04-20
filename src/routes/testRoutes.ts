import express from 'express'

// import class request and response from express
import { Request, Response } from "express"

//create instance router of express
const router = express.Router()

//crate a route at path / and response with "Hello, world!"
router.get('/', (req: Request, res: Response): void => {
    res.send("Hello, world!")
})

//create a route at path /aobout
router.get('/about', (req: Request, res: Response): void => {
    res.send("about us!")
})

router.get('/contact', (req: Request, res: Response): void => {
    res.send("contact us!")
})

export default router