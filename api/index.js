import express from 'express'
import { connectDB } from './lib/db.ts'

const app = express()

app.use(express.json())

app.get('/api', async (req, res) => {
  await connectDB()
  res.json({ message: 'works' })
})

export default app