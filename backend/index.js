import path from 'path'
import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.js'
connectDB()

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
// import uploadRoutes from './routes/multer.js'

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
// app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.get('/', (req, res) => {
  res.send('This is the home page')
})

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
)
