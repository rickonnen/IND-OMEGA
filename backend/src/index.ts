import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import healthRoutes from './modules/health/health.routes'
import multimediaRoutes from './modules/multimedia/multimedia.routes'

const app: Application = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/health', healthRoutes)
app.use('/api/multimedia', multimediaRoutes)

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' })
})

app.use((err: Error, _req: Request, res: Response) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
  console.log(`Multimedia rules: http://localhost:${PORT}/api/multimedia/rules`)
})