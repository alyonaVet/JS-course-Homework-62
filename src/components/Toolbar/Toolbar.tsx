import React from 'react';
import {NavLink} from 'react-router-dom';

interface ToolbarProps {
  image: string;
  text: string;
}

const Toolbar: React.FC<ToolbarProps> = ({image, text}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <NavLink to="/" className="navbar-brand">
            <img src={image} alt="logo"/>
          </NavLink>
          <span className="navbar-item ms-2" style={{fontSize: '10px'}}>{text}</span>
        </div>
        <div className="navbar-nav">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link">Главная страница</NavLink>
            <NavLink to="/catalog" className="nav-link">Каталог</NavLink>
            <NavLink to="/aboutus" className="nav-link">О нас</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;