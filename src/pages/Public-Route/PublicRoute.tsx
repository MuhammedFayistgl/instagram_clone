import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
type PublicRouteProps = {
    children?: ReactNode;
};
const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    if (localStorage.getItem("uid")) {
        return <Navigate to="/" />;
    } else {
        return <>{children}</>;
    }
};

export default PublicRoute;
