import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from './InicioSesion.module.css' // Importar el módulo CSS

const InicioSesion = () => {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (usuario === 'usuario' && contrasena === 'contrasena') {
            setMensaje('Inicio de sesión exitoso')
        } else {
            setMensaje('Nombre de usuario o contraseña incorrectos')
        }
    }

    return (
        <div className={styles.app}>
            {/* Inicio del Header */}
            <Header />
            {/* Fin del Header */}

            <main className={styles.loginContainer}>
                <div className={styles.loginBox}>
                    <h2>Inicio de Sesión</h2>
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <div>
                            <label>Nombre de Usuario</label>
                            <input
                                type='text'
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input
                                type='password'
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                            />
                        </div>
                        <button type='submit'>Entrar</button>
                    </form>
                    {mensaje && <p className={styles.message}>{mensaje}</p>}
                </div>
            </main>

            {/* Inicio del Footer */}
            <Footer />
            {/* Fin del Footer */}
        </div>
    )
}

export default InicioSesion
