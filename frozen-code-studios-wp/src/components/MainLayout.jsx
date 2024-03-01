import {Outlet} from 'react-router';
import {TopBar} from './TopBar';
import SignInPopup from './topbar-menu-items/SignInPopup';
import {useState} from 'react';

export const MainLayout = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div>
      <TopBar showLoginFunction={() => setShowLoginPopup(true)} />
      <div>
        <Outlet /> {/* This is where the "children" routes will be rendered */}
      </div>
      <footer>
        <div>&copy; Frozen Code Studios 2024</div>
      </footer>
      <SignInPopup showPopup={showLoginPopup} closePopup={() => setShowLoginPopup(false)} />
    </div>
  );
};

export default MainLayout;
