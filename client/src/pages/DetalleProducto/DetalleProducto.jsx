import { useContext} from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom';
import { ProductoContext } from '../../context/ProductoContext'

const DetalleProducto = () => {
    const { productos } = useContext(ProductoContext)
    const { id } = useParams()

    const productosId = productos.filter((ele) => ele.id === id);

    return (
        <>
            {/* Inicio del Banner */}
            <Header />
            {/* Fin del Banner */}
            
            {/* Inicio del Contenido Principal */}
            <div className='w-75 m-auto p-5'>
            {productosId.map((producto) =>(
                <Card key={producto.id} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img style={{height: '100%'}} src={producto.imagen} />
                        </div>
                        <Card.Body className='col-md-8'>
                            <Card.Title className='border-bottom pb-3'>{producto.nombre}</Card.Title>
                            <Card.Text>
                                {producto.descripcion}
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <h4 className='p-3'>Precio: ${producto.precio}</h4>
                                <Link to={'/carrito/'}><Button variant="danger" >Añadir 🛒</Button></Link>
                            </div>
                        </Card.Body>
                    </div>               
                </Card>
            ))}
        </div>  
            {/* Fin del Contenido Principal */}

            {/* Inicio del Footer */}
            <Footer />
            {/* Fin del Footer */}
        </>
    )
}

export default DetalleProducto
