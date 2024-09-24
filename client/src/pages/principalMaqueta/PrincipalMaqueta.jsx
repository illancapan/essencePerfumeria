import React, { useContext } from 'react';
import { ProductoContext } from '../../context/ProductoContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card from '../../components/cardProduct/Card';
import fondoImage from '../../assets/fondo.jpg';
import styles from './PrincipalMaqueta.module.css';

function PrincipalMaqueta() {
    const { setFragancia_id, setOrderBy } = useContext(ProductoContext);

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
                    <h1>La Magia de Essence</h1>
                    <p>
                        Despierta tus sentidos con nuestras fraganciass exóticas y deliciosas.
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

                </section>
            </main>

            <Footer />
        </div>
    );
}

export default PrincipalMaqueta;