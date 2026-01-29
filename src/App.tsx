import { BrowserRouter, Routes, Route } from 'react-router-dom';
 // Ajuste o caminho se necessário
import Home from './pages/Home';
import Financeiro from './pages/Finances';
import Admin from './pages/Admin';
import Login from './pages/Login';
import RotaProtegida from './components/ProtectedRoute'; 
import Navbar from './sections/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/admin" 
          element={
            <RotaProtegida>
              <Admin />
            </RotaProtegida>
          } 
        />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;