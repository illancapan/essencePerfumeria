import React from 'react'
import styles from './card.module.css'
import { useContext } from 'react'
import { ProductoContext } from '../../context/ProductoContext'
import { Link } from 'react-router-dom'
// import AgregarAlCarro from '../../components/agregarAlCarro/AgregarAlCarro'

function Card() {
    const { productos } = useContext(ProductoContext)

    if (!Array.isArray(productos)) {
        return <p>Error: Los productos no están disponibles.</p>
    }
    return (
        <div className={styles.productGrid}>
            {productos.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <img src={product.imagen} alt={product.nombre} />
                    <h3>{product.nombre}</h3>
                    <div className={styles.productInfo}>
                        <span>{product.precio}</span>
                        <span>★★★★☆</span>
                    </div>
                    <Link to={`/perfume/${product.id}`}>
                        <button>Ver detalle</button>
                    </Link>
                    {/* <AgregarAlCarro producto={product} /> */}
                </div>
            ))}
        </div>
    )
}

export default Card
