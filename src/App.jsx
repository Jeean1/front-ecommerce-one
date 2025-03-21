import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './components/models/rootStore';
import { AuthProvider } from './components/providers/authProvider';
import ProtectedRoute from './components/common/ProtectedRoute';
import CreateQuote from './pages/CreateQuote';
import Main from './pages/Main';
import GameDetail from './pages/GameDetail';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/game/detail/:id" element={<GameDetail />} />

            {/* Ruta protegida */}
            <Route element={<ProtectedRoute />}>
              <Route path="/cotizaciones/crear" element={<CreateQuote />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </StoreProvider>
  );
}

export default App;
