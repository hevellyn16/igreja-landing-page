import { BrowserRouter, Routes, Route } from 'react-router-dom';
 // Ajuste o caminho se necessário
import Home from './pages/Home';
import Financeiro from './pages/Finances';
import Admin from './pages/Admin';
import Login from './pages/Login';
import RotaProtegida from './components/ProtectedRoute'; // Importe o segurança!
import Navbar from './sections/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar fica fora pra aparecer em tudo, mas você pode esconder no login se quiser */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/login" element={<Login />} />
        
        {/* AQUI ESTÁ A PROTEÇÃO */}
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