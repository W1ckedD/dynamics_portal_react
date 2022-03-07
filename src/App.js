import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import IndexPage from './pages/Index';

function App() {
  return (
    <Router basename="/dynamics">
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
