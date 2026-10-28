import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Votacao from './pages/Votacao';
import Resultado from './pages/Resultado';
import './App.css';

const NaoEncontrada = () => (
  <main className="conteudo sem-votos">
    <p>Essa porteira não leva a lugar nenhum.</p>
    <Link to="/" className="botao botao-principal">Voltar ao início</Link>
  </main>
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/votacao" element={<Votacao />} />
      <Route path="/resultado" element={<Resultado />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
    <footer className="rodape">DIAW 2026, PUC Minas</footer>
  </BrowserRouter>
);

export default App;
