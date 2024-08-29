import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrincipalMaqueta from './pages/principalMaqueta/PrincipalMaqueta';
import RegistroUsuario from './pages/Registro de Usuario/RegistroUsuario';
import InicioSesion from './pages/Inicio de Sesion/InicioSesion';
import PoVUsuario from './pages/Mi Perfil Usuario/PoVUsuario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta para la página principal */}
                <Route path="/" element={<PrincipalMaqueta />} />

                {/* Ruta para la vista de Registro de Usuario */}
                <Route path="/registro" element={<RegistroUsuario />} />

                {/* Ruta para la vista de Inicio de Sesión */}
                <Route path="/login" element={<InicioSesion />} />

                {/* Ruta para la vista Mi perfil Usuario */}
                <Route path="/profile" element={<PoVUsuario />} />
            </Routes>
        </Router>
    );
}

export default App;
