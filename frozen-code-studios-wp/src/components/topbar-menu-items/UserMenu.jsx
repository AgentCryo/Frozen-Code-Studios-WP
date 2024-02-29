import { ControlledMenu, MenuItem, useHover } from '@szhsin/react-menu';
import { useRef, useState } from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useAuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { anchorProps, hoverProps } = useHover(isOpen, setOpen);

  const navigate = useNavigate();
  const { logout } = useAuthContext();
  const { profile } = useAuthContext();

  return (
    <div style={{ padding: '0px 10px 0px 10px' }}>
      <Link
        ref={ref}
        {...anchorProps}
        style={{ color: 'white', textDecoration: 'none' }}
      >{profile?.displayName || "Login"}</Link>
      <ControlledMenu
        {...hoverProps}
        state={isOpen ? 'open' : 'closed'}
        anchorRef={ref}
        onClose={() => setOpen(false)}
      >
            <MenuItem onClick={() => navigate('/')}>...</MenuItem>
            <MenuItem onClick={() => navigate('/')}>...</MenuItem>
            <MenuItem onClick={() => navigate('/')}>...</MenuItem>
            <MenuItem onClick={() => {logout();}}>Logout</MenuItem>
      </ControlledMenu>
    </div>
  );
};

export default UserMenu;
