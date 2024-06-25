import React from 'react';
import {InfoItem} from '../../types';
import TextInfo from './TextInfo';

interface TextBlockProps {
  info: InfoItem[];
}

const TextBlock: React.FC<TextBlockProps> = ({info}) => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <h3>Наша цель - создать фантастический сервис для всех потребителей</h3>
      <div className="d-flex gap-2">
      {info.map((item, id) => (
        <TextInfo key={id} title={item.title} text={item.text} />
      ))}
      </div>
    </div>
  );
};

export default TextBlock;