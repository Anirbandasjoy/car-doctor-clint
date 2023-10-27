import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    useEffect(() => {
        localStorage.setItem("location", location.pathname);
    }, [location]);

    if (loading) {
        return <h1>Loading...</h1>;
    } else if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

PrivateRouter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRouter;
