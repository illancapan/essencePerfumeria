import { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from './RegistroUsuario.module.css'

const RegistroUsuario = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const usuario = {
            nombre,
            apellido,
            email,
            contrasena,
        }

        console.log('Datos del usuario:', usuario)

        setMensaje('Registro exitoso')

        setNombre('')
        setApellido('')
        setEmail('')
        setContrasena('')
    }

    return (
        <div className={styles.app}>
            {/* Inicio del Header */}
            <Header />
            {/* Fin del Header */}

            <main className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    <h3>Registro de Usuario</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nombre</label>
                            <input
                                type='text'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input
                                type='text'
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <button type='submit'>Registrarse</button>
                    </form>
                    {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
                </div>
            </main>

            {/* Inicio del Footer */}
            <Footer />
            {/* Fin del Footer */}
        </div>
    )
}

export default RegistroUsuario
