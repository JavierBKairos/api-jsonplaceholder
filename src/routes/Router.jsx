import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<div>about</div>} />
    </Routes>
  );
}

export { Router };
