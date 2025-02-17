import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../providers/authProvider";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === null ? (
          <p style={{ textAlign: "center", margin: "50vh 0" }}>
            Validando sesión...
          </p>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
