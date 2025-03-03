import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./components/models/rootStore";
import { AuthProvider } from "./components/providers/authProvider";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./pages/Home";
import CreateQuote from "./pages/CreateQuote";
import Main from "./pages/Main";
import GameDetail from "./pages/GameDetail";
import "./App.css";

function App() {
  return (
    <StoreProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/game/detail/:id" component={GameDetail} />

            <Route path="/login" component={Home} />

            {/* Ruta protegida */}
            <ProtectedRoute
              path="/cotizaciones/crear"
              component={CreateQuote}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </StoreProvider>
  );
}

export default App;
