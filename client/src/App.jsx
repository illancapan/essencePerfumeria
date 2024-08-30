
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrincipalMaqueta from './pages/principalMaqueta/PrincipalMaqueta';
import RegistroUsuario from './pages/registrodeUsuario/RegistroUsuario';
import InicioSesion from './pages/iniciodeSesion/InicioSesion';
import MiPerfilUsuario from './pages/MiPerfilUsuario/MiPerfilUsuario';
import MiPerfilAdmin from './pages/MiPerfilAdmin/MiPerfilAdmin';
import DetalleProducto from './pages/DetalleProducto/DetalleProducto';
import { ProductosProvider } from './context/ProductoContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <ProductosProvider>
            <Router>
                <Routes>
                    {/* Ruta para la página principal */}
                    <Route path='/' element={<PrincipalMaqueta />} />

                    {/* Ruta para la vista de Registro de Usuario */}
                    <Route path='/registro' element={<RegistroUsuario />} />

                    {/* Ruta para la vista de Inicio de Sesión */}
                    <Route path='/login' element={<InicioSesion />} />

                {/* Ruta para la vista Mi perfil Usuario */}
                <Route path="/profile" element={<MiPerfilUsuario />} />

                {/* Ruta para la vista Mi perfil Admin */}
                <Route path="/admin" element={<MiPerfilAdmin />} />

                {/* Ruta para la vista de Detalle de Producto */}
                <Route path="/product/:id" element={<DetalleProducto />} />
            </Routes>
        </Router>
        </ProductosProvider>
    );
}

export default App
