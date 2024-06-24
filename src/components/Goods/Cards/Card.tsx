import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  text: string;
}

const Card: React.FC<CardProps> = ({image, text}) => {
  return (
    <div className="card card-hover align-items-center p-2 mb-3" style={{width: '200px'}}>
      <a className="card-link" href="#">
        <img src={image} className="card-img-top d-block" style={{width: '120px'}} alt=""/>
        <div className="card-body d-flex">
          <p className="card-text mt-auto">{text}</p>
        </div>
      </a>
    </div>
  )
    ;
};

export default Card;