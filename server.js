import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan'
import productsRoutes from './src/routes/products.routes.js'
import { registerUser, loginUser } from './src/controllers/user.Controller.js'
import { authenticateToken } from './middleware/authenticateToken.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Rutas
// app.use('/api', productsRoutes)
app.use('/api/perfumes', productsRoutes)

app.post('/api/register', registerUser)
app.post('/api/login', loginUser)
app.get('/api/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso concedido' })
})

app.listen(PORT, () => {})

export default app
