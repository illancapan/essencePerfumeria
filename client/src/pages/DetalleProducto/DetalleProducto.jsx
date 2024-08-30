import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const DetalleProducto = () => {
    return (
        <div className='app'>
                <style jsx>{`
                    .app {
                        font-family: Arial, sans-serif;
                        min-height: 100vh;
                        background-color: white;
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
                `}</style>

            {/* Inicio del Banner */}
            <Header/>
            {/* Fin del Banner */}

            {/* Inicio del Contenido Principal */}
            <main style={{ display: 'flex', justifyContent: 'center', padding: '110px' }}>
                <div style={{ display: 'flex', gap: '20px', width: '80%', justifyContent: 'center' }}>
                    {/* Producto */}
                    <div style={{ width: '50%', border: '1px solid #ccc', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
                        <div style={{ height: '300px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}>
                            <p>PRODUCTO</p>
                        </div>
                        <div>
                            <p style={{ textAlign: 'left', marginBottom: '5px' }}>NOMBRE DEL PRODUCTO</p>
                            <p style={{ textAlign: 'left', fontWeight: 'bold' }}>$99.990</p>
                        </div>
                    </div>

                    {/* Descripción */}
                    <div style={{ width: '50%', border: '1px solid #ccc', padding: '20px', backgroundColor: '#ddd' }}>
                        <div style={{ height: '300px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bbb' }}>
                            <p>DESCRIPCION</p>
                        </div>
                        <button style={{ width: '100%', padding: '10px', backgroundColor: '#555', color: '#fff', border: 'none' }}>
                            AGREGAR AL CARRITO
                        </button>
                    </div>
                </div>
            </main>
            {/* Fin del Contenido Principal */}

            {/* Inicio del Footer */}
            <Footer/>
            {/* Fin del Footer */}
        </div>
    );
};

export default DetalleProducto;