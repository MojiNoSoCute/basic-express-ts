import express from 'express'
import { Request, Response } from 'express'
import pool from '../utils/db'

const router = express.Router()

router.get('/testdb', async (req: Request, res: Response) => {
    try {
        //test connection
        const client = await pool.connect()
        await client.query('SELECT NOW()')
        client.release() //retrun connection to pool for release connection to other connection 

        res.status(200).json({
            message: 'Database connection successful!'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Database connection failed!',
            error: error
        })
    }
})

export default router