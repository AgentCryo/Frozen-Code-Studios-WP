import React, { useState } from 'react';
import { useAuthContext } from '../../providers/AuthProvider';
import './SignInPopup.css';
import { FieldValue } from 'firebase/firestore';

export const SignInPopup = (props) => {

  let warningString = '';

  const [loginCreateOT, loginCreateIN] = useState(false);

  const closePopup = props.closePopup;
  const { register } = useAuthContext();

  const [Error, setError] = useState(null)

  const [username, setUsername] = useState('')
  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  if (!loginCreateOT) {
    return props.showPopup ? (
      <div className='popup'>
        <div className='sign-in-window'>
          <div className='p2'>{ Error && <span style={{color: 'red'}}>{Error}</span> }</div>
          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' onChange={(e) => setUsername(e.target.value)} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' onChange={(e) => setPassword(e.target.value)} />

          <button onClick={loginFunct}>Login</button>

          <button onClick={() => loginCreateIN(true)}>Don't Have an Accoun?t</button>

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

          <button onClick={() => loginCreateIN(false)}>Don't Have an Account?</button>

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
  
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function createFunct () {
    if (isValidEmail(email)) {
      if (password.length <= 4) {
        if (username !== '') {
          register(email, password, username)
          console.log(username)
          console.log(email)
          console.log(password)
        } else {
          setError = "Error invalid username, do not leave feild blank."
        }
      } else {
        setError = "Error invalid password, check for spaces and or the password has to be over 4 chars."
      }
    } else {
      setError = "Error invalid email/gmail, please put a valid email/gmail."
    }

  }
};


export default SignInPopup;
