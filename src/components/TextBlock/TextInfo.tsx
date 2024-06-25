import React from 'react';

interface TextInfoProps {
  title: string;
  text: string;
}

const TextInfo: React.FC<TextInfoProps> = ({title, text}) => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <h2 className="card-title" style={{color: '#FF4D4D', fontWeight: '700'}}>{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default TextInfo;