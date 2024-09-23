import React from 'react'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
    const setActiveClass = ({ isActive }) => (isActive ? styles.active : styles.desactive)

    return (
    <div>
        <header>
            <div className={styles.logo}><NavLink className={setActiveClass} style={{textDecoration: 'none'}} to='/'>essence</NavLink></div>
                <nav>
                    <ul>
                        <NavLink className={setActiveClass} style={{textDecoration: 'none'}} to='/'>Inicio</NavLink>
                        <NavLink className={setActiveClass} style={{textDecoration: 'none'}} to='/register'>Registrarse</NavLink>
                        <NavLink className={setActiveClass} style={{textDecoration: 'none'}} to='/login'>Iniciar sesion</NavLink>
                    </ul>
                </nav>
            <div className={styles.icons}>
                    <NavLink className={setActiveClass} style={{textDecoration: 'none'}} to='/profile'><i class="fa-solid fa-user"></i></NavLink>
                    <NavLink className={setActiveClass} style={{textDecoration: 'none'}} to='/carrito'><i class="fa-solid fa-cart-shopping"></i></NavLink>
                </div>
                </header>
    </div>
    )
}

export default Header