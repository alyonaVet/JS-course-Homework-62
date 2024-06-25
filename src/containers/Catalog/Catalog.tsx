import React from 'react';
import Goods from '../../components/Goods/Goods';
import {GoodItem} from '../../types';

interface CatalogProps {
  goods: GoodItem[];
}

const Catalog: React.FC<CatalogProps> = ({goods}) => {
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-3 mb-5" style={{color: '#FF4D4D'}}>Каталог товаров</h3>
        <Goods goods={goods}/>
      </div>
    </>
  );
};

export default Catalog;