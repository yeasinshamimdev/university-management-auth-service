import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/modules/users/user.router'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users/', router)

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('It is working')
})

export default app
