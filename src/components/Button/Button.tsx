import {NavLink} from 'react-router-dom';

const Button = () => {
  return (
    <NavLink to="/catalog" className="btn mb-3" style={{background: '#FF4D4D', color: 'white'}}>Перейти к покупкам</NavLink>
  );
};

export default Button;