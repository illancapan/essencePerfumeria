import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PrincipalMaqueta from './pages/principalMaqueta/PrincipalMaqueta'
import RegistroUsuario from './pages/RegistrodeUsuario/RegistroUsuario'
import InicioSesion from './pages/IniciodeSesion/InicioSesion'
import MiPerfilUsuario from './pages/MiPerfilUsuario/MiPerfilUsuario'
import MiPerfilAdmin from './pages/MiPerfilAdmin/MiPerfilAdmin'
import DetalleProducto from './pages/DetalleProducto/DetalleProducto'
import { ProductosProvider } from './context/ProductoContext'
import { CarroProvider } from './context/CarroContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarroCompras from './pages/carroDeCompras/CarroCompras'
import PrivateRouteUser from './components/privateRouteUser/PrivateRouteUser'
import PrivateRouteAdmin from './components/privateRouteAdmin/PrivateRouteAdmin';

function App() {
    return (
        <CarroProvider>
            <ProductosProvider>
                <Router>
                    <Routes>
                        {/* Ruta para la página principal */}
                        <Route path='/' element={<PrincipalMaqueta />} />

                        {/* Ruta para la vista de Registro de Usuario */}
                        <Route path='/register' element={<RegistroUsuario />} />

                        {/* Ruta para la vista de Inicio de Sesión */}
                        <Route path='/login' element={<InicioSesion />} />

                        {/* Ruta para la vista Mi perfil Usuario */}
                        <Route 
                            path='/profile' 
                            element={
                                <PrivateRouteUser>
                                    <MiPerfilUsuario />
                                </PrivateRouteUser>
                            } 
                        />

                         {/* Ruta para la vista Mi perfil Admin */}
                         <Route 
                            path='/admin' 
                            element={
                                <PrivateRouteAdmin>
                                    <MiPerfilAdmin />
                                </PrivateRouteAdmin>
                            } 
                        />

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
    )
}

export default App
