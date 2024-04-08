import mongoose from 'mongoose'
import 'dotenv/config.js'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URI)

db.on('connected', () => {
  console.log(`MongoDB server is up and running on port ${db.port}`)
})

db.on('disconnected', () => {
  console.log('MongoDB server connection has ended...')
})

db.on('error', (error) => {
  console.error(`There was an error: ${error}`)
})



