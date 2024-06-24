import React from 'react';
import {GoodItem} from '../../types';
import Card from './Cards/Card';

interface GoodsProps {
  goods: GoodItem[];
}

const Goods: React.FC<GoodsProps> = ({goods}) => {
  return (
    <div className="d-flex justify-content-evenly flex-wrap">
      {goods.map((item, id) => (
        <Card key={id} image={item.image} text={item.name} />
      ))}
    </div>
  );
};

export default Goods;