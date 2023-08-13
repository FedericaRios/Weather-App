import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Presentation from './pages/presentation';

function App() {
  return (
    <HashRouter>
      <Routes >
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
