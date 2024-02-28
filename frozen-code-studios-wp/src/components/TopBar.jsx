import GamesMenu from './topbar-menu-items/GamesMenu';
import HomeMenu from './topbar-menu-items/HomeMenu';
import StudioInfoMenu from './topbar-menu-items/StudioInfoMenu';
import DiscordMenu from './topbar-menu-items/DiscordMenu'; 
import { useAuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

export const TopBar = (props) => {

  const showLoginFunction = props.showLoginFunction;

  const { profile } = useAuthContext();

  return (
    <div id='topBar'>
      <h1 className='default-font'>Frozen Code Studios</h1>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>
        <HomeMenu />
        <GamesMenu />
        <StudioInfoMenu />
        <DiscordMenu />
        <Link
          style={{ color: 'white', textDecoration: 'none' }}
          onClick={showLoginFunction}
        >
          {profile?.displayName || "Login"}
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
