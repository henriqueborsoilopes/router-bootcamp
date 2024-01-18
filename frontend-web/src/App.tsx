import { Router } from './router/Router';
import { Navbar } from './shared/component';
import './shared/theme';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};
