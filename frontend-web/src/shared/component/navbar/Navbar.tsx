import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-custom">
      <div className="container-fluid navbar-container container-xl">
        <Link className="navbar-brand" to="/">
          <h1>Carros Top</h1>
        </Link>
        <button
          className="navbar-toggler toggler-custom"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-button"
          aria-controls="navbar-button"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbar-button"
        >
          <div className="navbar-nav-custom">
            <NavLink to="/home" className="navbar-link-custom">
              Home
            </NavLink>
            <NavLink to="/catalogo" className="navbar-link-custom">
              Catálogo
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
