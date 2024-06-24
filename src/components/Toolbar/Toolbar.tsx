import React from 'react';

interface ToolbarProps {
  image: string;
  text: string;
}

const Toolbar: React.FC<ToolbarProps> = ({image, text}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img src={image} alt="Behoof" />
          </a>
          <span className="navbar-item ms-2" style={{fontSize: '10px'}}>{text}</span>
        </div>
        <div className="navbar-nav">
          <div className="navbar-nav">
            <a className="nav-link" href="#">Главная страница</a>
            <a className="nav-link" href="#">Каталог</a>
            <a className="nav-link" href="#">О нас</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;