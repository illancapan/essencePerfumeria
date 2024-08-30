import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const MiPerfilAdmin = () => {
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

            {/* Inicio del Header */}
            <Header/>
            {/* Fin del Header */}
            
            <main style={{ padding: '220px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '80%', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
                    <h2 style={{ textAlign: 'center' }}>Gestión de Productos</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 2fr 100px 150px', gap: '10px', alignItems: 'center' }}>
                        {/* Producto */}
                        <div>
                            <img src='/placeholder.svg' alt='Producto' style={{ width: '100%' }} />
                        </div>

                        {/* Descripción */}
                        <div>
                            <input
                                type='text'
                                placeholder='Descripción del producto'
                                style={{ width: '100%', padding: '2px', marginBottom: '10px' }}
                            />
                        </div>

                        {/* Precio */}
                        <div>
                            <input
                                type='number'
                                placeholder='Precio'
                                style={{ width: '100%', padding: '2px', marginBottom: '10px' }}
                            />
                        </div>

                        {/* Cantidad */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            
                            <input
                                type='number'
                                defaultValue={1}
                                style={{ width: '50px', textAlign: 'center', padding: '2px', marginBottom: '10px' }}
                            />
                            
                        </div>

                        {/* Botones de Acción */}
                        <div style={{ gridColumn: 'span 4', textAlign: 'center', marginTop: '20px' }}>
                            <button style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>
                                Subir Producto
                            </button>
                            <button style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}>
                                Borrar Producto
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {/* Fin de la nueva sección main */}
            
            {/* Inicio del Footer */}
            <Footer/>
            {/* Fin del Footer */}
        </div>
    );
};

export default MiPerfilAdmin;
