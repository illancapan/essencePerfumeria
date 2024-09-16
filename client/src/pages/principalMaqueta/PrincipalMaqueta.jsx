import { useContext } from 'react'
import { ProductoContext } from '../../context/ProductoContext'
import Header from '../../components/header/Header'
import fondo from '../../assets/fondo.jpg'
import Footer from '../../components/footer/Footer'
import Card from '../../components/cardProduct/Card'

function PrincipalMaqueta() {
    const { cargando, error, setFragancia_id, setOrderBy } = useContext(ProductoContext)

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
                        cursor: pointer;
                    }
                    .filter-options li:first-child {
                        font-weight: bold;
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
                    <img src={fondo} alt='Hero Image' />
                    
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
                <li onClick={() => { setFragancia_id('') }}>Todos</li>
                <li onClick={() => setFragancia_id('1')}>Citricos</li>
                <li onClick={() => setFragancia_id('2')}>Florales</li>
                <li onClick={() => setFragancia_id('3')}>Maderas</li>
            </ul>
            <select onChange={(e) => setOrderBy(e.target.value)}>
                <option value="">Ordenar por precio</option>
                <option value="asc">Precio: Bajo a Alto</option>
                <option value="desc">Precio: Alto a Bajo</option>
            </select>
                    </div>

                    <Card/>

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
