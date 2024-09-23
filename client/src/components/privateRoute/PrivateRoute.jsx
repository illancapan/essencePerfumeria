import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Obtener el token de localStorage

    // Verificar si el token existe
    if (!token) {
        return <Navigate to="/login" />; // Redirigir a la página de inicio de sesión si no está autenticado
    }

    return children; // Si está autenticado, renderiza los hijos
};

export default PrivateRoute;