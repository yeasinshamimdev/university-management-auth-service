import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.router'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users/', UserRoutes)

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     throw new Error("kire error ena")
//     // next("Kire error")
// })

// global error handler
app.use(globalErrorHandler)

export default app
