import {useState} from 'react';
import {useAuthContext} from '../../providers/AuthProvider';
import './SignInPopup.css';
import {getAuth, sendSignInLinkToEmail} from 'firebase/auth';
//import { FieldValue } from 'firebase/firestore';

export const SignInPopup = (props) => {
  const [loginCreateOT, loginCreateIN] = useState(false);

  const closePopup = props.closePopup;
  const {register} = useAuthContext();
  const {login} = useAuthContext();
  const {user} = useAuthContext();
  const {auth, actionCodeSettings} = getAuth();
  const {authErrorMessages} = useAuthContext();

  const [username, setUsername] = useState('');
  const [usernameError, setusernameError] = useState(null);

  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState(null);

  const [email, setEmail] = useState('');
  const [emailError, setemailError] = useState(null);

  const [notification, setnotification] = useState(null);

  if (!loginCreateOT) {
    if (user.email) {
      closePopup();
    }

    return props.showPopup ? (
      <div className="popup">
        <div className="sign-in-window">
          {authErrorMessages && <span style={{color: 'red'}}>{authErrorMessages}</span>}
          <div className="p2">Gmail / Email</div>
          <input type="text" name="Gmail" onChange={(e) => setEmail(e.target.value)} />

          <div className="p2">Password</div>
          <input type="password" name="Password" onChange={(e) => setPassword(e.target.value)} />

          <button
            onClick={() => {
              setemailError('');
              setpasswordError('');
              setusernameError('');
              loginFunct();
            }}
          >
            Login
          </button>

          <button
            onClick={() => {
              loginCreateIN(true);
              setemailError('');
              setpasswordError('');
              setusernameError('');
            }}
          >
            Don't Have an Accoun?t
          </button>

          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    ) : (
      ''
    );
  } else {
    if (user) {
      closePopup();
    }

    return props.showPopup ? (
      <div className="popup">
        <div className="sign-in-window">
          <div className="p2">{notification}</div>
          <div className="p2">Username</div>
          <input type="text" name="UserName" onChange={(e) => setUsername(e.target.value)} />
          {usernameError && <span style={{color: 'red'}}>{usernameError}</span>}

          <div className="p2">Gmail / Email</div>
          <input type="text" name="Gmail" onChange={(e) => setEmail(e.target.value)} />
          {emailError && <span style={{color: 'red'}}>{emailError}</span>}

          <div className="p2">Password</div>
          <input type="password" name="Password" onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <span style={{color: 'red'}}>{passwordError}</span>}

          <button
            onClick={() => {
              setemailError('');
              setpasswordError('');
              setusernameError('');
              createFunct();
            }}
          >
            Create Account
          </button>

          <button
            onClick={() => {
              loginCreateIN(false);
              setemailError('');
              setpasswordError('');
              setusernameError('');
            }}
          >
            Have an Account?
          </button>

          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    ) : (
      ''
    );
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function loginFunct() {
    login(email.toLocaleLowerCase(), password);
  }

  function createFunct() {
    if (isValidEmail(email)) {
      if (password.length >= 4) {
        if (username !== '') {
          register(email.toLocaleLowerCase(), password, username);
          console.log(username);
          console.log(email);
          console.log(password);
          sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
              // The link was successfully sent. Inform the user.
              setnotification('Email/Gmail Sent, Please verify your email.');
              // Save the email locally so you don't need to ask the user for it again
              // if they open the link on the same device.
              window.localStorage.setItem('emailForSignIn', email);
              // ...
            })
            .catch(() => {
              null;
            });
        } else {
          setTimeout(
            () => setusernameError('Error invalid username, do not leave field blank.'),
            100,
          );
        }
      } else {
        setTimeout(
          () =>
            setpasswordError(
              'Error invalid password, check for spaces and or the password has to be over 4 chars.',
            ),
          100,
        );
      }
    } else {
      setTimeout(
        () => setemailError('Error invalid email/gmail, please put a valid email/gmail.'),
        100,
      );
    }
  }
};

export default SignInPopup;
