import { ReactNode } from 'react';

import './LayoutBase.css';

interface ILayoutBase {
  children: ReactNode;
}

export const LayoutBase: React.FC<ILayoutBase> = ({ children }) => {
  return (
    <>
      <div className="layout-custom container-xl">{children}</div>
    </>
  );
};
