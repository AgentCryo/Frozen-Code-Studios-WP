import { useState } from 'react';
import { useAuthContext } from '../../providers/AuthProvider';
import './SignInPopup.css';
//import { FieldValue } from 'firebase/firestore';

export const SignInPopup = (props) => {

  const [loginCreateOT, loginCreateIN] = useState(false);

  const closePopup = props.closePopup;
  const { register } = useAuthContext();

  const [username, setUsername] = useState('')
  const [usernameError, setusernameError] = useState(null)
  
  const [password, setPassword] = useState('')
  const [passwordError, setpasswordError] = useState(null)
  
  const [email, setEmail] = useState('')
  const [emailError, setemailError] = useState(null)
  
  if (!loginCreateOT) {
    return props.showPopup ? (
      <div className='popup'>
        <div className='sign-in-window'>
          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' onChange={(e) => setUsername(e.target.value)} />

          <div className='p2'>Password</div>
          <input type='password' name='Password' onChange={(e) => setPassword(e.target.value)} />

          <button onClick={() => {setemailError(''); setpasswordError(''); setusernameError(''); loginFunct;}}>Login</button>

          <button onClick={() => { loginCreateIN(true); setemailError(''); setpasswordError(''); setusernameError('')}}>Don't Have an Accoun?t</button>

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
          { usernameError && <span style={{color: 'red'}}>{usernameError}</span> }       

          <div className='p2'>Gmail / Email</div>
          <input type='text' name='Gmail' onChange={(e) => setEmail(e.target.value)} />
          { emailError && <span style={{color: 'red'}}>{emailError}</span> }

          <div className='p2'>Password</div>
          <input type='password' name='Password' onChange={(e) => setPassword(e.target.value)}/>
          { passwordError && <span style={{color: 'red'}}>{passwordError}</span> }

          <button onClick={() => {setemailError(''); setpasswordError(''); setusernameError(''); createFunct;}}>Create Account</button>

          <button onClick={() => { loginCreateIN(false); setemailError(''); setpasswordError(''); setusernameError('')}}>Have an Account?</button>

          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    ) : (
      ''
    );
  }
  function loginFunct () {
    console.log(email)
    console.log(password)
  }
  
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function createFunct () {
    if (isValidEmail(email)) {
      if (password.length >= 4) {
        if (username !== '') {
          register(email, password, username)
          console.log(username)
          console.log(email)
          console.log(password)
        } else {
          setTimeout(() => setusernameError("Error invalid username, do not leave feild blank."), 1000)
        }
      } else {
        setTimeout(() => setpasswordError("Error invalid password, check for spaces and or the password has to be over 4 chars."), 1000)
      }
    } else {
      setTimeout(() => setemailError("Error invalid email/gmail, please put a valid email/gmail."), 1000)
    }

  }
};


export default SignInPopup;
