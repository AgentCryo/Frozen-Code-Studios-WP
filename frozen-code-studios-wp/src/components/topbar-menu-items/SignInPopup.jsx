import React, { useState } from 'react';
import { useAuthContext } from '../../providers/AuthProvider';
import './SignInPopup.css';

export const SignInPopup = (props) => {

  let Login_Create = false;

  const closePopup = props.closePopup;
  const { register } = useAuthContext();

  const loginData = useState({
    UserName: '',
    Gmail: '',
    Password: '',
  });

  const PressedLogin = () => {
    console.log('Login Data:', loginData);
  };

  if (!Login_Create) {
    return props.showPopup ? (
      <div className='popup'>
        <div className='sign-in-window'>
          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' value={loginData.Gmail} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' value={loginData.Password} />

          <button onClick={PressedLogin}>Login</button>
          <div className='p2' />

          <button>Don't Have an Account</button>
          <div className='p2' />

          <button onClick={closePopup}>Cancel</button>
          <div className='p2' />
        </div>
      </div>
    ) : (
      ''
    );
  } else {
    return props.showPopup ? (
      <div className='popup'>
        <div className='sign-in-window'>
          <div className='p2'>Username</div>
          <input type='text' name='UserName' value={loginData.UserName} />

          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' value={loginData.Gmail} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' value={loginData.Password} />

          <button onClick={PressedLogin}>Create Account</button>
          <div className='p2' />

          <button>Have an Account?</button>
          <div className='p2' />

          <button onClick={closePopup}>Cancel</button>
          <div className='p2' />
        </div>
      </div>
    ) : (
      ''
    );
  }
};

export const UGP_varification = (loginData) => {
  console.log(loginData);
};

export default SignInPopup;
