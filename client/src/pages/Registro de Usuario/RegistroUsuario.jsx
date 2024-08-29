
import React from 'react';

const RegistroUsuario = () => {
    return (
        <div className='app'>
                <style jsx>{`
                    .app {
                        font-family: Arial, sans-serif;
                        min-height: 100vh;
                        background-color: white;
                    }
                    header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 1rem 2rem;
                        background-color: white;
                    }
                    .logo {
                        font-size: 1.5rem;
                        font-weight: bold;
                    }
                    nav ul {
                        display: flex;
                        list-style-type: none;
                        gap: 1.5rem;
                    }
                    .icons {
                        display: flex;
                        gap: 1rem;
                    }
                    .cart-icon {
                        position: relative;
                    }
                    .cart-count {
                        position: absolute;
                        top: -8px;
                        right: -8px;
                        background-color: red;
                        color: white;
                        border-radius: 50%;
                        width: 20px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.75rem;
                    }
                    .hero {
                        position: relative;
                        height: calc(100vh - 80px);
                        background-color: #f0f0f0;
                    }
                    .hero img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .hero-content {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: white;
                        padding: 2rem;
                    }
                    .hero-content h1 {
                        font-size: 2rem;
                        font-weight: bold;
                    }
                    .hero-nav {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        background-color: white;
                        padding: 0.5rem;
                        border-radius: 50%;
                    }
                    .hero-nav-left {
                        left: 1rem;
                    }
                    .hero-nav-right {
                        right: 1rem;
                    }
                    .intro {
                        text-align: center;
                        padding: 4rem 2rem;
                    }
                    .intro h2 {
                        font-size: 2rem;
                        margin-bottom: 1rem;
                    }
                    .intro p {
                        max-width: 600px;
                        margin: 0 auto;
                        color: #666;
                    }
                    .products {
                        padding: 0 2rem;
                    }
                    .product-filters {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 2rem;
                    }
                    .filter-options {
                        display: flex;
                        gap: 1.5rem;
                    }
                    .filter-options li:first-child {
                        font-weight: bold;
                    }
                    .product-grid {
                        display: grid;
                        grid-template-columns: repeat(
                            auto-fill,
                            minmax(200px, 1fr)
                        );
                        gap: 2rem;
                    }
                    .product-card {
                        background-color: #f0f0f0;
                        padding: 1rem;
                    }
                    .product-card img {
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                        margin-bottom: 1rem;
                    }
                    .product-info {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .pagination {
                        display: flex;
                        justify-content: center;
                        gap: 0.5rem;
                        margin-top: 2rem;
                    }
                    .pagination button {
                        padding: 0.5rem 1rem;
                        border: 1px solid #ccc;
                        background-color: white;
                        cursor: pointer;
                    }
                    footer {
                        background-color: #f0f0f0;
                        padding: 2rem;
                        margin-top: 4rem;
                    }
                    .footer-content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .subscribe {
                        display: flex;
                        gap: 1rem;
                    }
                    .subscribe input {
                        padding: 0.5rem;
                        border: 1px solid #ccc;
                    }
                    .subscribe button {
                        padding: 0.5rem 1rem;
                        background-color: black;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }
                    .social-icons {
                        display: flex;
                        gap: 1rem;
                    }
                    .footer-bottom {
                        text-align: center;
                        margin-top: 2rem;
                        font-size: 0.875rem;
                        color: #666;
                    }
                `}</style>

            {/* Inicio del Header */}
            <header>
                    <div className='logo'>essence</div>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Tienda</li>
                            {/* <li>Perfil</li> */}
                            {/* <li>Perfumes</li> */}
                            <li>Contacto</li>
                        </ul>
                    </nav>
                    <div className='icons'>
                        <span>🔍</span>
                        <span>👤</span>
                        <span className='cart-icon'>
                            🛒
                            <span className='cart-count'>3</span>
                        </span>
                    </div>
                </header>
            {/* Fin del Header */}
            
            <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h3 style={{ textAlign: 'center' }}>Registro de Usuario</h3>
                    <form>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Nombre</label>
                            <input type="text" style={{ width: '100%', padding: '2px', marginTop: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Apellido</label>
                            <input type="text" style={{ width: '100%', padding: '2px', marginTop: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Email</label>
                            <input type="email" style={{ width: '100%', padding: '2px', marginTop: '5px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label>Contraseña</label>
                            <input type="password" style={{ width: '100%', padding: '2px', marginTop: '5px' }} />
                        </div>
                        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                            Registrarse
                        </button>
                    </form>
                </div>
            </main>
            
            {/* Inicio del Footer */}
            <footer>
                    <div className='footer-content'>
                        <div className='logo'>essence</div>
                        <div className='subscribe'>
                            <input
                                type='email'
                                placeholder='Ingresa tu email'
                            />
                            <button>Suscribete</button>
                        </div>
                        <div className='social-icons'>
                            <span>FB</span>
                            <span>TW</span>
                            <span>IG</span>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        © 2023 essence. Derechos reservados. | Politicas de
                        privacidad | terminos de servicio
                    </div>
                </footer>
            {/* Fin del Footer */}
        </div>
    );
};

export default RegistroUsuario;
