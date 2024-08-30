import React from 'react'
import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer>
                    <div className={styles.footerContent}>
                        <div className={styles.logo}><NavLink style={{color: 'black', textDecoration: 'none'}} to='/'>essence</NavLink></div>
                        <div className={styles.subscribe}>
                            <input
                                type='email'
                                placeholder='Ingresa tu email'
                            />
                            <button>Suscribete</button>
                        </div>
                        <div className={styles.socialIcons}>
                            <span>FB</span>
                            <span>TW</span>
                            <span>IG</span>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        © 2023 essence. Derechos reservados. | Politicas de
                        privacidad | terminos de servicio
                    </div>
                </footer>
        </div>
    )
}

export default Footer
