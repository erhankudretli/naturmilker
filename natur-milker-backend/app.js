import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import helmet from 'helmet'

// Middlewares
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

// Routers
import productsRouter from './routes/ProductRoute.js'
import producerRouter from './routes/ProducerRoute.js'

let app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }))

app.use('/products', productsRouter)
app.use('/producer', producerRouter)

app.listen(3005, () => {
  console.log('listening on 3005')
})
