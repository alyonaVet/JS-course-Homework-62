import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  text: string;
}

const Card: React.FC<CardProps> = ({image, text}) => {
  return (
    <div className="card card-hover align-items-center p-2 mb-3" style={{width:'250px'}}>
      <a className="card-link d-flex flex-column align-items-center" href="#">
        <img src={image} className="card-img-top d-block" style={{width:'200px'}} alt={text}/>
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </a>
    </div>
  )
    ;
};

export default Card;