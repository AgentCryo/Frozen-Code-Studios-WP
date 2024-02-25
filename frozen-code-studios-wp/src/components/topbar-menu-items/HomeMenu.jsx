import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';

export const HomeMenu = () => {
  return (
    <div style={{ padding: '0px 10px 0px 10px' }}>
      <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </Link>
    </div>
  );
};

export default HomeMenu;
