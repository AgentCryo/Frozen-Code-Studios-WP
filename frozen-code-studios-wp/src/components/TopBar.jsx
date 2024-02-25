import GamesMenu from './topbar-menu-items/GamesMenu';
import HomeMenu from './topbar-menu-items/HomeMenu';
import StudioInfoMenu from './topbar-menu-items/StudioInfoMenu';

export const TopBar = () => {

  return (
    <div id='topBar'>
      <h1 className='default-font'>Frozen Code Studios</h1>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'row'}}>
        <HomeMenu />
        <GamesMenu />
        <StudioInfoMenu />
      </div>
    </div>
  );
};

export default TopBar;
