import React, { useContext } from 'react';
import { ProductoContext } from '../../context/ProductoContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card from '../../components/cardProduct/Card';
import fondoImage from '../../assets/fondo.jpg';
import styles from './PrincipalMaqueta.module.css';

function PrincipalMaqueta() {
    const { cargando, error, setFragancia_id, setOrderBy } = useContext(ProductoContext);

    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={styles.app}>
            <Header />

            <main>
                <section className={styles.hero}>
                    <img src={fondoImage} alt="Hero Image" className={styles.heroImage} />
                    <button className={`${styles.heroNav} ${styles.heroNavLeft}`} aria-label="Previous slide">←</button>
                    <button className={`${styles.heroNav} ${styles.heroNavRight}`} aria-label="Next slide">→</button>
                </section>

                <section className={styles.intro}>
                    <h1>simple</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </section>

                <section className={styles.products}>
                    <div className={styles.productFilters}>
                        <ul className={styles.filterOptions}>
                            <li><button onClick={() => setFragancia_id('')}>Todos</button></li>
                            <li><button onClick={() => setFragancia_id('1')}>Citricos</button></li>
                            <li><button onClick={() => setFragancia_id('2')}>Florales</button></li>
                            <li><button onClick={() => setFragancia_id('3')}>Maderas</button></li>
                        </ul>
                        <select onChange={(e) => setOrderBy(e.target.value)} aria-label="Ordenar por precio">
                            <option value="">Ordenar por precio</option>
                            <option value="asc">Precio: Bajo a Alto</option>
                            <option value="desc">Precio: Alto a Bajo</option>
                        </select>
                    </div>

                    <Card />

                    <div className={styles.pagination}>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button key={page}>{page}</button>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default PrincipalMaqueta;