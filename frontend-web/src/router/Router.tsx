import { Routes, Route, Navigate } from 'react-router-dom';
import { Catalog, Home } from '../page';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
