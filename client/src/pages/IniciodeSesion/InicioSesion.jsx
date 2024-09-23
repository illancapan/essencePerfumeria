import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LoginForm from '../../components/loginForm/LoginForm';
import styles from './InicioSesion.module.css';

const InicioSesion = () => {
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate(); // Crear la instancia de useNavigate

    const handleLogin = async ({ email, contrasena }) => {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, contrasena }),
            });
    
            const data = await response.json(); // Capturar el cuerpo de la respuesta
    
            if (response.ok) {
                setMensaje('Inicio de sesión exitoso');
                // Guardar token JWT en localStorage
                localStorage.setItem('token', data.token);
                // Redirigir a MiPerfilUsuario
                navigate('/profile'); // Cambia la ruta si es diferente
            } else {
                setMensaje(data.message || 'Nombre de usuario o contraseña incorrectos');
            }
        } catch (error) {
            setMensaje('Error en el servidor');
        }
    };

    return (
        <>
            <Header />
            <main className={styles.loginContainer}>
                <div className={styles.loginBox}>
                    <h2>Inicio de Sesión</h2>
                    <LoginForm onSubmit={handleLogin} />
                    {mensaje && <p className={styles.message}>{mensaje}</p>}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default InicioSesion;
