import {ControlledMenu, MenuItem, useHover} from '@szhsin/react-menu';
import {useRef, useState} from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {useAuthContext} from '../../providers/AuthProvider';
import {getAuth, sendEmailVerification} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export const UserMenu = () => {
  const ref = useRef(null);
  const auth = getAuth();
  const [isOpen, setOpen] = useState(false);
  const {anchorProps, hoverProps} = useHover(isOpen, setOpen);

  const navigate = useNavigate();
  const {logout, profile} = useAuthContext();
  const [closePopup, setClosePopup] = useState();

  function closeNotification() {
    setClosePopup(true);
  }
  function openNotification() {
    setClosePopup(false);
  }

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
        <MenuItem
          onClick={() => {
            sendEmailVerification(auth.currentUser).then(() => {
              openNotification;
              if (!closePopup) {
                return (
                  <div className="notification-window">
                    <p className="h1">Email verification has been sent</p>
                    <button onClick={closeNotification}>Cancel</button>
                  </div>
                );
              }
            });
          }}
        >
          Verify
        </MenuItem>
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
