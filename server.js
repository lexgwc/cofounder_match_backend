//Import envs
import 'dotenv/config.js'

//Import modules
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Import routes
import userRoutes from './api/routes/userRoutes.js';
import authRoutes from './api/routes/authRoutes.js';
import profileRoutes from './api/routes/profileRoutes.js';
import schoolRoutes from './api/routes/schoolRoutes.js';
import helperRoutes from './api/routes/helperRoutes.js';

// Import database connection
import './config/db.js'

const app = express()
const PORT = process.env.PORT || 3000

//Middleware

app.use(express.json())
app.use(morgan('combined'))
app.use(cors({origin: true}))
app.use(cookieParser())

// Routes
app.use('/auth', authRoutes)
app.use('/cofounders', userRoutes)
app.use('/cofounders', profileRoutes)
app.use('/cofounders', schoolRoutes)
app.use('/cofounders', helperRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))