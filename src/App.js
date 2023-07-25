import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Presentation from './pages/presentation/Presentation';
import Loader from './components/loader';

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
