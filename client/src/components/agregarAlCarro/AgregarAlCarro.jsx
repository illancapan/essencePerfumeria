import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { CarroContext } from '../../context/CarroContext'

const AgregarAlCarro = ({ producto }) => {
    const { añadirAlCarrito } = useContext(CarroContext)

    const handleAgragarAlCarrito = () => {
        console.log('Prodcuto agregado al carrito: ', producto)
        añadirAlCarrito(producto)
    }

    return (
        <>
            <Button variant='danger' onClick={handleAgragarAlCarrito}>
                Agregar 🛒
            </Button>
        </>
    )
}

export default AgregarAlCarro
