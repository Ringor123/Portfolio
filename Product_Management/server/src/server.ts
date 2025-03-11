import express from 'express'
import colors from 'colors'
import swagggerUi from 'swagger-ui-express'
import swaggerSpec, {swaggerUiOptions} from './config/swagger'
import productsRouter from './routers/productsRouter'
import db from './config/db'
import cors from 'cors'

// Conect to database
export const connectDb = async () => {
  try {
    await db.authenticate();
    db.sync()
    console.log(colors.magenta.bold("Connection has been established successfully."));
    server.emit('ready')
  } catch (error) {
    console.error(colors.bgRed.bold("Unable to connect to the database"));
  }
  
}
connectDb()

// Express instance
const server = express()

// Allow CORS connections
server.use(cors())

// Read form data
server.use(express.json())

// Routing
server.use('/api/products', productsRouter)

// Docs
server.use('/docs', swagggerUi.serve, swagggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server