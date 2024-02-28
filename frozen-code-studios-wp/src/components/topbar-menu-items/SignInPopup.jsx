import React, { useState } from 'react';
import { useAuthContext } from '../../providers/AuthProvider';
import './SignInPopup.css';
import { FieldValue } from 'firebase/firestore';

export const SignInPopup = (props) => {

  const [loginCreateOT, loginCreateIN] = useState(false);

  const closePopup = props.closePopup;
  const { register } = useAuthContext();

  const [username, setUsername] = useState('')
  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  if (!loginCreateOT) {
    return props.showPopup ? (
      <div className='popup'>
        <div className='sign-in-window'>
          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' onChange={(e) => setUsername(e.target.value)} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' onChange={(e) => setPassword(e.target.value)} />

          <button onClick={loginFunct}>Login</button>

          <button onClick={() => loginCreateIN(true)}>Don't Have an Account</button>

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
          <input type='text' name='UserName' onChange={(e) => setUsername(e.target.value)} />

          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' onChange={(e) => setEmail(e.target.value)} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' onChange={(e) => setPassword(e.target.value)}/>

          <button onClick={createFunct}>Create Account</button>

          <button onClick={() => loginCreateIN(false)}>Don't Have an Account</button>

          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    ) : (
      ''
    );
  }
  function loginFunct () {
    console.log(email)
    console.log(pasword)
  }
  
  function createFunct () {
    console.log(username)
    console.log(email)
    console.log(password)
  }
};


export default SignInPopup;
