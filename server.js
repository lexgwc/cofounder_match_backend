//Import envs
import 'dotenv/config.js'

//Import modules
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// TODO: Import routes
import userRoutes from './api/routes/userRoutes.js';
import authRoutes from './api/routes/authRoutes.js';
import profileRoutes from './api/routes/profileRoutes.js';

// Import database connection
import './config/db.js'

const app = express()
const PORT = process.env.PORT || 3000

//Middleware

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())
app.use(cookieParser())

// TODO: app.use Routes
app.use('/auth', authRoutes)
app.use('/cofounders', userRoutes)
app.use('/cofounders', profileRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))