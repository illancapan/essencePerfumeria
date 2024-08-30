import { useState, useEffect } from 'react'
import jsonData from '../../data/prueba.json' // Ajusta la ruta según sea necesario

const PrincipalMaqueta = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Usa los datos importados directamente
        setProducts(jsonData)
    }, [])

    return (
        <div>
            <h1>Lista de Perfumes</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            margin: '20px',
                            border: '1px solid #ccc',
                            padding: '10px',
                            borderRadius: '8px',
                            maxWidth: '200px',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h2>{product.name}</h2>
                        <p>Precio: ${product.price}</p>
                        <p>Categoria: {product.category}</p>
                        <p>Popularidad: {product.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrincipalMaqueta
