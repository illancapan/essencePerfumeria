import 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const DetalleProducto = () => {
    return (
        <>
            {/* Inicio del Banner */}
            <Header />
            {/* Fin del Banner */}

            {/* Inicio del Contenido Principal */}
            <main
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '110px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        width: '80%',
                        justifyContent: 'center',
                    }}
                >
                    {/* Producto */}
                    <div
                        style={{
                            width: '50%',
                            border: '1px solid #ccc',
                            padding: '20px',
                            backgroundColor: '#333',
                            color: '#fff',
                        }}
                    >
                        <div
                            style={{
                                height: '300px',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#222',
                            }}
                        >
                            <p>PRODUCTO</p>
                        </div>
                        <div>
                            <p
                                style={{
                                    textAlign: 'left',
                                    marginBottom: '5px',
                                }}
                            >
                                NOMBRE DEL PRODUCTO
                            </p>
                            <p
                                style={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                }}
                            >
                                $99.990
                            </p>
                        </div>
                    </div>

                    {/* Descripción */}
                    <div
                        style={{
                            width: '50%',
                            border: '1px solid #ccc',
                            padding: '20px',
                            backgroundColor: '#ddd',
                        }}
                    >
                        <div
                            style={{
                                height: '300px',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#bbb',
                            }}
                        >
                            <p>DESCRIPCION</p>
                        </div>
                        <button
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: '#555',
                                color: '#fff',
                                border: 'none',
                            }}
                        >
                            AGREGAR AL CARRITO
                        </button>
                    </div>
                </div>
            </main>
            {/* Fin del Contenido Principal */}

            {/* Inicio del Footer */}
            <Footer />
            {/* Fin del Footer */}
        </>
    )
}

export default DetalleProducto
