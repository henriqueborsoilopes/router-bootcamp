import { Banner, CTA } from '../../shared/component';
import { LayoutBase } from '../../shared/layout';

export const Home: React.FC = () => {
  return (
    <LayoutBase>
      <Banner />
      <CTA />
    </LayoutBase>
  );
};
