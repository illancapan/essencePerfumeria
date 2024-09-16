import { useState, useEffect, useMemo, useContext } from 'react'
import { CarroContext } from '../../context/CarroContext'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Styles from './CarroCompras.module.css'

function CarroCompras() {
    const { carro, loading } = useContext(CarroContext)
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        if (!loading) {
            setProducts(carro)
        }
    }, [carro, loading])

    const calculateTotal = useMemo(() => {
        const subtotal = products.reduce(
            (sum, product) =>
                sum +
                (parseFloat(product.precio) || 0) * (product.cantidad || 1),
            0
        )
        return subtotal - discount
    }, [products, discount])

    useEffect(() => {
        setTotal(calculateTotal)
    }, [calculateTotal])

    const modifyQuantity = (id, change) => {
        setProducts(
            products.map((product) =>
                product.id === id
                    ? {
                          ...product,
                          cantidad: Math.max(
                              1,
                              (product.cantidad || 1) + change
                          ),
                      }
                    : product
            )
        )
    }

    const removeProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    const applyDiscount = (code) => {
        if (code === 'DESCUENTO10') {
            setDiscount(10)
        } else {
            alert('Código de descuento inválido')
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <>
            <Header />
            <div className={Styles.carroComprasContainer}>
                <div className={Styles.mainContent}>
                    <main className='container'>
                        <h1 className='mb-4'>Carro de Compras</h1>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Imagen</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.nombre}</td>
                                        <td>
                                            <img
                                                src={product.imagen}
                                                alt={product.nombre}
                                                className='img-thumbnail'
                                                width={50}
                                                height={50}
                                            />
                                        </td>
                                        <td>
                                            $
                                            {(
                                                parseFloat(product.precio) || 0
                                            ).toFixed(2)}
                                        </td>
                                        <td>
                                            <button
                                                className='btn btn-secondary btn-sm me-2'
                                                onClick={() =>
                                                    modifyQuantity(
                                                        product.id,
                                                        -1
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            {product.cantidad || 1}
                                            <button
                                                className='btn btn-secondary btn-sm ms-2'
                                                onClick={() =>
                                                    modifyQuantity(
                                                        product.id,
                                                        1
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            ${' '}
                                            {(
                                                (parseFloat(product.precio) ||
                                                    0) * (product.cantidad || 1)
                                            ).toFixed(2)}
                                        </td>
                                        <td>
                                            <button
                                                className='btn btn-danger btn-sm'
                                                onClick={() =>
                                                    removeProduct(product.id)
                                                }
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-between mt-4'>
                            <div className='d-flex'>
                                <input
                                    type='text'
                                    className='form-control me-2'
                                    placeholder='Código de descuento'
                                    id='discountCode'
                                />
                                <button
                                    className='btn btn-primary'
                                    onClick={() =>
                                        applyDiscount(
                                            document.getElementById(
                                                'discountCode'
                                            ).value
                                        )
                                    }
                                >
                                    Aplicar
                                </button>
                            </div>
                            <div className='text-end'>
                                <p>
                                    Subtotal: ${(total + discount).toFixed(2)}
                                </p>
                                <p>Descuento: ${discount.toFixed(2)}</p>
                                <strong>Total: ${total.toFixed(2)}</strong>
                            </div>
                        </div>
                        <button className='btn btn-success btn-lg mt-4 w-100'>
                            Proceder al pago
                        </button>
                    </main>
                </div>
                <Footer className={Styles.footer} />
            </div>
        </>
    )
}

export default CarroCompras
