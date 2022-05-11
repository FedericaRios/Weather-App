import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Presentation from './pages/presentation/Presentation';

function App() {
  return (
    <BrowserRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/home" element={<Home />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
