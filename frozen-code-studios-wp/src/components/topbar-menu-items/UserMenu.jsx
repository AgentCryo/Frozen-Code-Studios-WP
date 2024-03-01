import {ControlledMenu, MenuItem, useHover} from '@szhsin/react-menu';
import {useRef, useState} from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {useAuthContext} from '../../providers/AuthProvider';
import {useNavigate} from 'react-router-dom';

export const UserMenu = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const {anchorProps, hoverProps} = useHover(isOpen, setOpen);

  const navigate = useNavigate();
  const {logout, profile} = useAuthContext();

  return (
    <div>
      <p className="t" ref={ref} {...anchorProps} style={{color: 'white', textDecoration: 'none'}}>
        {profile?.displayName || 'Username Not Found'}
      </p>
      <ControlledMenu
        {...hoverProps}
        state={isOpen ? 'open' : 'closed'}
        anchorRef={ref}
        onClose={() => setOpen(false)}
      >
        <MenuItem onClick={() => navigate('/')}>...</MenuItem>
        <MenuItem onClick={() => navigate('/')}>...</MenuItem>
        <MenuItem onClick={() => navigate('/')}>...</MenuItem>
        <MenuItem
          onClick={() => {
            logout();
          }}
        >
          Logout
        </MenuItem>
      </ControlledMenu>
    </div>
  );
};

export default UserMenu;
