import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PrincipalMaqueta from './pages/principalMaqueta/PrincipalMaqueta'
import RegistroUsuario from './pages/registrodeUsuario/RegistroUsuario'
import InicioSesion from './pages/iniciodeSesion/InicioSesion'
import MiPerfilUsuario from './pages/miPerfilUsuario/MiPerfilUsuario'
import MiPerfilAdmin from './pages/miPerfilAdmin/MiPerfilAdmin'
import DetalleProducto from './pages/detalleProducto/DetalleProducto'
import { ProductosProvider } from './context/ProductoContext'
import { ApiProvider } from './context/ApiContext'
import { CarroProvider } from './context/CarroContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarroCompras from './pages/carroDeCompras/CarroCompras'

function App() {
    return (
        <ApiProvider>
            <CarroProvider>
                <ProductosProvider>
                    <Router>
                        <Routes>
                            {/* Ruta para la página principal */}
                            <Route path='/' element={<PrincipalMaqueta />} />

                            {/* Ruta para la vista de Registro de Usuario */}
                            <Route
                                path='/registro'
                                element={<RegistroUsuario />}
                            />

                            {/* Ruta para la vista de Inicio de Sesión */}
                            <Route path='/login' element={<InicioSesion />} />

                            {/* Ruta para la vista Mi perfil Usuario */}
                            <Route
                                path='/profile'
                                element={<MiPerfilUsuario />}
                            />

                            {/* Ruta para la vista Mi perfil Admin */}
                            <Route path='/admin' element={<MiPerfilAdmin />} />

                            {/* Ruta para ver el carro de compras */}
                            <Route path='/carrito' element={<CarroCompras />} />

                            {/* Ruta para la vista de Detalle de Producto */}
                            <Route
                                path='/perfume/:id'
                                element={<DetalleProducto />}
                            />
                        </Routes>
                    </Router>
                </ProductosProvider>
            </CarroProvider>
        </ApiProvider>
    )
}

export default App
