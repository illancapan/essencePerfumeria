import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import router from './src/routes/routes.js';
import { registerUser, loginUser } from './src/controllers/user.Controller.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Rutas
app.use('/', router); 
app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

app.listen(PORT, () => {
    console.log(`Conectado a servidor en el puerto 🔥🔥 http://localhost:${PORT}`);
});
