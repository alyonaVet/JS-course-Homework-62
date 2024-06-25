import React from 'react';
import {NavLink} from 'react-router-dom';

interface FooterProps {
  image: string;
  text: string;
}

const Footer: React.FC<FooterProps> = ({image, text}) => {
  return (
    <footer className="container-fluid bg-body-tertiary p-2">
      <div className="d-flex justify-content-between align-items-center">
        <NavLink to="/" className="logo"><img src={image} alt='logo'/></NavLink>
        <div className='fs-6'>{text}</div>
      </div>
    </footer>
  );
};

export default Footer;