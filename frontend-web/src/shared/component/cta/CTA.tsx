import { Link } from 'react-router-dom';
import './CTA.css';

export const CTA: React.FC = () => {
  return (
    <div className="cta-custom">
      <Link to="/catalogo" className="btn btn-secundary" type="button">
        VER CATÁLOGO
      </Link>
      <p>Comece agora a navegar</p>
    </div>
  );
};
