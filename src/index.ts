// const app = () => {
//     console.log("Hello, world!");
//     } 

//     app();

// import expreess from "express";
import express from "express"

//import routes
import testRoutes from "./routes/testRoutes"
import productRoutes from "./routes/productRoutes"

//create an instance of express
const app = express()

//do express can read request body from client
app.use(express.json())

//use Routes from import
app.use('/api', testRoutes)
app.use('/api', productRoutes)

//run sever on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

export default app