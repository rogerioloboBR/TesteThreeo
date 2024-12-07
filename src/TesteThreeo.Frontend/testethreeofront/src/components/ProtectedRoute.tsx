import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRouter: React.FC =() =>{
    const token = localStorage.getItem('token');

    return token ? <Outlet/> : <Navigate to="/"/>
};

export default ProtectedRouter;