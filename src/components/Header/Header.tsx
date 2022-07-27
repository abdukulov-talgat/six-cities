import { ReactNode } from 'react';

type HeaderProps = {
  children?: ReactNode
}

const Header = ({ children }: HeaderProps) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        {children}
      </div>
    </div>
  </header>
);

export default Header;
