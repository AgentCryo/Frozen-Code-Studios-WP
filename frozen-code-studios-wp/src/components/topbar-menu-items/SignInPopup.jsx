import React, { useState } from 'react';
import { useAuthContext } from '../../providers/AuthProvider';
import './SignInPopup.css';

export const SignInPopup = (props) => {

  const [loginCreateOT, loginCreateIN] = useState(false);

  const closePopup = props.closePopup;
  const { register } = useAuthContext();
  
  if (!loginCreateOT) {
    return props.showPopup ? (
      <div className='popup'>
        <div className='sign-in-window'>
          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' />

          <div className='p2'>Password</div>
          <input type='password' name='Password' />

          <button>Login</button>

          <button onClick={loginCreateIN(true)}>Don't Have an Account</button>

          <button onClick={closePopup}>Cancel</button>
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
          <input type='text' name='UserName' />

          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' />

          <div className='p2'>Password</div>
          <input type='password' name='Password' />

          <button>Create Account</button>

          <button onClick={loginCreateIN(false)}>Have an Account?</button>

          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    ) : (
      ''
    );
  }
};

export default SignInPopup;
