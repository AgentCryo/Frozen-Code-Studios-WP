import GamesMenu from './topbar-menu-items/GamesMenu';
import HomeMenu from './topbar-menu-items/HomeMenu';
import StudioInfoMenu from './topbar-menu-items/StudioInfoMenu';
import DiscordMenu from './topbar-menu-items/DiscordMenu'; 
import UserMenu from './topbar-menu-items/UserMenu';
import { useAuthContext } from '../providers/AuthProvider';

export const TopBar = (props) => {

  const showLoginFunction = props.showLoginFunction;

  const { user } = useAuthContext();

  return (
    <div id='topBar'>
      <h1 className='default-font'>Frozen Code Studios</h1>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>
        <HomeMenu />
        <GamesMenu />
        <StudioInfoMenu />
        <DiscordMenu />
        <div> { user 
            ? <UserMenu /> 
            : <p className='t' onClick={showLoginFunction}>Login</p> 
          } </div>
      </div>
    </div>
  );
};

export default TopBar;
