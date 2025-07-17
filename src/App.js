import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChefsPage from './pages/ChefsPage';
import ChefMenuPage from './pages/ChefMenuPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer'; // Добавлен импорт

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chefs" element={<ChefsPage />} />
        <Route path="/chefs/:id/menu" element={<ChefMenuPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;