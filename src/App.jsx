// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import { StoreProvider } from "./components/models/rootStore";
import Home from "./pages/Home";
import CreateQuote from "./pages/CreateQuote";
import Header from "./components/common/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Home />
          </Route>
          <Route path="/cotizaciones/crear">
            <Header>
              <CreateQuote />
            </Header>
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
