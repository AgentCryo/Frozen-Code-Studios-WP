import { ControlledMenu, MenuItem, useHover } from '@szhsin/react-menu';
import { useRef, useState } from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link, useNavigate } from 'react-router-dom';

export const GamesMenu = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { anchorProps, hoverProps } = useHover(isOpen, setOpen);

  const navigate = useNavigate();

  return (
    <div style={{ padding: '0px 10px 0px 10px' }}>
      <Link
        ref={ref}
        {...anchorProps}
        style={{ color: 'white', textDecoration: 'none' }}
      >
        Games
      </Link>
      <ControlledMenu
        {...hoverProps}
        state={isOpen ? 'open' : 'closed'}
        anchorRef={ref}
        onClose={() => setOpen(false)}
      >
        <MenuItem onClick={() => navigate('/page1')}>DevLogs</MenuItem>
        <MenuItem onClick={() => navigate('/page2')}>InterDev</MenuItem>
        <MenuItem onClick={() => navigate('/')}>Bugs Report</MenuItem>
      </ControlledMenu>
    </div>
  );
};

export default GamesMenu;
