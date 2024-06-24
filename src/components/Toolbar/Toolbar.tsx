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
          <span className="navbar-item fs-6 ms-4">{text}</span>
        </div>
        <div className="navbar-nav">
          <div className="navbar-nav">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">About us</a>
            <a className="nav-link" href="#">Contacts</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;