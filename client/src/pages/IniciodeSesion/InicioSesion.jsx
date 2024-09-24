import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { jwtDecode } from 'jwt-decode'; // Asegúrate de tener jwt-decode instalado
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LoginForm from '../../components/loginForm/LoginForm';
import styles from './InicioSesion.module.css';

const InicioSesion = () => {
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate(); // Crear la instancia de useNavigate

    const handleLogin = async ({ email, contrasena }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_USUARIO_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, contrasena }),
            });
            // Resto del manejo de la respuesta
        } catch (error) {
            console.error('Error:', error);
        }
    };

            const data = await response.json(); // Capturar el cuerpo de la respuesta

            if (response.ok) {
                setMensaje('Inicio de sesión exitoso');
                // Guardar token JWT en localStorage
                localStorage.setItem('token', data.token);

                // Decodificar el token para obtener el rol
                const decodedToken = jwtDecode(data.token);
                const userRole = decodedToken.rol;

                // Redirigir según el rol
                if (userRole === 'admin') {
                    navigate('/admin'); // Redirige al admin
                } else if (userRole === 'usuario') {
                    navigate('/profile'); // Redirige al usuario regular
                } else {
                    setMensaje('Rol no reconocido, redirigiendo a inicio.');
                    navigate('/login'); // Redirige a login si el rol no es reconocido
                }
            } else {
                setMensaje(data.message || 'Nombre de usuario o contraseña incorrectos');
            }
        } catch (error) {
            setMensaje('Error en el servidor');
            console.error('Error en el servidor:', error); // Imprimir error en consola
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
