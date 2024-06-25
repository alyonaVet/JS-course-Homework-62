import {footerItems, infoItems, reviewItems} from '../../constants';
import Goods from '../../components/Goods/Goods';
import TextBlock from '../../components/TextBlock/TextBlock';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-5">Лучший выбор в Behoof</h2>
        <Goods goods={reviewItems} />
      </div>
        <TextBlock info={infoItems} />
      <Footer image={footerItems.image} text={footerItems.text} />
    </>
  );
};

export default Home;