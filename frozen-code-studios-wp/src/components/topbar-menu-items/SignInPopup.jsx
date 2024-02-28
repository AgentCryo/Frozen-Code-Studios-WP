import React, { useState } from 'react';
import { useAuthContext } from '../../providers/AuthProvider';
import './SignInPopup.css';
import { FieldValue } from 'firebase/firestore';

export const SignInPopup = (props) => {

  const [loginCreateOT, loginCreateIN] = useState(false);

  const closePopup = props.closePopup;
  const { register } = useAuthContext();

  [username, setUsername] = useState('')
  
  [pasword, setPasword] = useState('')
  [email, setEmail] = useState('')
  
  if (!loginCreateOT) {
    return props.showPopup ? (
      <div className='popup'>
        <div className='sign-in-window'>
          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' onChange={(value) => setUsername(value)} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' onChange={(value) => setPasword(value)} />

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
          <input type='text' name='UserName' onChange={(value) => setUsername(value)} />

          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' onChange={(value) => setEmail(value)} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' onChange={(value) => setPasword(value)}/>

          <button onClick={createFunct}>Create Account</button>

          <button onClick={() => loginCreateIN(false)}>Don't Have an Account</button>

          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    ) : (
      ''
    );
  }
};

loginFunct (); {
  console.log(email)
  console.log(pasword)
}

createFunct (); {
  console.log(username)
  console.log(email)
  console.log(pasword)
}

export default SignInPopup;
