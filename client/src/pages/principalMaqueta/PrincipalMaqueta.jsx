import { useContext } from 'react'
import { ProductoContext } from '../../context/ProductoContext'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function PrincipalMaqueta() {
    const { productos, cargando, error } = useContext(ProductoContext)

    if (cargando) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <>
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

                <Header />

                <section className='hero'>
                    <img src='/placeholder.svg' alt='Hero Image' />
                    <div className='hero-content'>
                        <h1>essence</h1>
                    </div>
                    <button className='hero-nav hero-nav-left'>←</button>
                    <button className='hero-nav hero-nav-right'>→</button>
                </section>

                <section className='intro'>
                    <h2>simple</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </section>

                <section className='products'>
                    <div className='product-filters'>
                        <ul className='filter-options'>
                            <li>Todos</li>
                            <li>Citricos</li>
                            <li>Frutales</li>
                            <li>Hombre</li>
                            <li>Mujer</li>
                        </ul>
                        <select>
                            <option>Filtro dar funcion :D</option>
                        </select>
                    </div>

                    <div className='product-grid'>
                        {productos.map((product) => (
                            <div key={product.id} className='product-card'>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <div className='product-info'>
                                    <span>{product.price}</span>
                                    <span>★★★★☆</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='pagination'>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button key={page}>{page}</button>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default PrincipalMaqueta
