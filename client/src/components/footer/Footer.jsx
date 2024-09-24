import React from 'react'
import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.logo}>
                        <NavLink
                            style={{ color: 'black', textDecoration: 'none' }}
                            to='/'
                        >
                            essence
                        </NavLink>
                    </div>
                    <div className={styles.storeAddress}>
                    <p>Dirección: Calle Argentina 123, Santiago de Chile.</p>
                    <p>Horario: Lunes a Viernes, 9:00 - 18:00</p>
                </div>
                <div className={styles.contactInfo}>
                    <p>Contacto: (123) 456-7890 | info@essence.com</p>
                    <p>¡Visita nuestra tienda para promociones exclusivas!</p>
                </div>
                    <div className={styles.socialIcons}>
                        <a href={'https://web.facebook.com/?_rdc=1&_rdr'}>
                            <i
                                className={'fa-brands fa-square-facebook fa-xl'}
                            ></i>
                        </a>
                        <a href={'https://www.instagram.com/'}>
                            <i className={'fa-brands fa-instagram fa-xl'}></i>
                        </a>
                        <a href={'https://x.com/'}>
                            <i className={'fa-brands fa-x-twitter fa-xl'}></i>
                        </a>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    © 2023 essence. Derechos reservados. | Politicas de
                    privacidad | terminos de servicio
                </div>
            </footer>
        </>
    )
}

export default Footer
