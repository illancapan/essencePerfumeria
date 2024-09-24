import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRouteAdmin = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.rol;

        // Lógica de redirección para admin
        if (userRole === 'admin') {
            return children; // Permite el acceso al admin
        } else {
            console.log('Rol no reconocido o no es admin, redirigiendo a /login');
            return <Navigate to="/login" />; // Redirige si no es admin
        }
    } catch (error) {
        console.error("Token inválido:", error);
        return <Navigate to="/login" />;
    }
};

export default PrivateRouteAdmin;