import logoImage from './assets/logo.svg';
import phoneImg from './assets/img-1.png';
import laptopImg from './assets/img-2.png';
import tabletImg from './assets/img-3.png';
import consoleImg from './assets/img-4.png';
import headphoneImg from './assets/img-5.png';
import smartphoneImg from './assets/img-6.png';
import compImg from './assets/img-7.png';
import accImg from './assets/img-8.png';


export const logoItems = {image: logoImage, text: 'Лучшие цены в интернет-магазинах'};

export const goodItems = [
  {name: "Смартфоны", image: phoneImg, id: 1},
  {name: "Ноутбуки", image: laptopImg, id: 2},
  {name: "Планшеты", image: tabletImg, id: 3},
  {name: "Игровые приставки", image: consoleImg, id: 4},
  {name: "Наушники", image: headphoneImg, id: 5},
];

export const reviewItems = [
  {id: 1, name: 'Обзор смартфонов', image: smartphoneImg},
  {id: 2, name: 'Обзор компьютеров', image: compImg},
  {id: 3, name: 'Обзор аксессуаров', image: accImg},
];

export const infoItems = [
  {id: 1, title: '1 миллион', text: 'товары доступны в нашем сервисе со всеми необходимыми данными для принятия решения о покупке'},
  {id: 2, title: '25', text: 'технологические сайты по всему миру, на которых мы просматриваем статьи, дополняющие информацию о продуктах.'},
  {id: 3, title: '50', text: 'интернет-магазины, где мы отслеживаем цены, чтобы вы могли их сравнивать, а также видеть историю цен и не поддаваться на фальшивые скидки'},
  {id: 4, title: '6', text: 'раз в сутки мы обновляем данные по всем товарам на нашем сайте и готовы уведомить вас об этих изменениях'},
];

export const footerItems = {image: logoImage, text: 'Copyright © 2023 Behoof, Inc. Все права защищены.'}