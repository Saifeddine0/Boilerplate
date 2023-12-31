import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
  })

app.use('/api/products',productRoute)
app.use('/api/users',userRoute)

app.use((req,res,next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((err ,req ,res,next)=>{
    const statusCode = res.statusCode ===200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV ==='production' ? null :err.stack,
    })
})


const PORT = process.env.PORT || 5000


app.listen(PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))