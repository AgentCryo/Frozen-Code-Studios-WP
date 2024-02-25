import { Outlet } from 'react-router';
import { TopBar } from './TopBar';

export const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <div>
        <Outlet /> {/* This is where the "children" routes will be rendered */}
      </div>
      <footer>
        <div>&copy; Frozen Code Studios 2024</div>
      </footer>
    </div>
  );
};

export default MainLayout;
