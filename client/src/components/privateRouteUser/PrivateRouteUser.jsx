import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRouteUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.rol;

        // Lógica de redirección para usuario
        if (userRole === 'usuario') {
            return children; // Permite el acceso al usuario
        } else {
            console.log('Rol no reconocido o no es usuario, redirigiendo a /login');
            return <Navigate to="/login" />; // Redirige si no es usuario
        }
    } catch (error) {
        console.error("Token inválido:", error);
        return <Navigate to="/login" />;
    }
};

export default PrivateRouteUser;
