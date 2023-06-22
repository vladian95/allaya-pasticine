import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import WebSite from './pages/WebSite/WebSite';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/website" element={<WebSite />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
