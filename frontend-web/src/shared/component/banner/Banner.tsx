import './Banner.css';
import car_banner from '../../../asset/car-banner.svg';

export const Banner: React.FC = () => {
  return (
    <div className="banner-custom">
      <img src={car_banner} alt="car image" />
      <div>
        <h1>O carro perfeito para você</h1>
        <p>
          Conheça nossos carros e dê mais um passo na realização do seu sonho
        </p>
      </div>
    </div>
  );
};
