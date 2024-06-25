import Home from './containers/Home/Home';
import {Route, Routes} from 'react-router-dom';
import Catalog from './containers/Catalog/Catalog';
import {goodItems, logoItems} from './constants';
import AboutUs from './containers/AboutUs/AboutUs';
import Toolbar from './components/Toolbar/Toolbar';

const App = () => {
   return (
       <>
         <Toolbar image={logoItems.image} text={logoItems.text}/>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/catalog" element={<Catalog goods={goodItems} />} />
           <Route path="/aboutus" element={<AboutUs />} />
           <Route path="*" element={<h3 className="mt-3 mb-5 text-center">Страница не найдена!</h3>} />
         </Routes>
       </>

   );
};

export default App;
