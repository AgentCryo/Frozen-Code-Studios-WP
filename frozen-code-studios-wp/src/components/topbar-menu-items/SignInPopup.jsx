import { useState } from 'react';
import {useAuthContext} from '../providers/AuthProvider';
import './SignInPopup.css';

const {register} = useAuthContext();

export const SignInPopup = (props) => {
  const closePopup = props.closePopup;
  
  return props.showPopup ? (
    <div className='popup'>
      <div className='sign-in-window'>
        <div className='p2'>Username</div>
        <input type='text' name='UserName' value={login_data.UserName}/>
        <div className='p2'>Gmail / Email</div>
        <input type='text' name='Gmail' value={login_data.Password}/>
        <div className='p2'>Password</div>
        <input type='password' name='Password' value={login_data.Password}/>
        <button>Login</button>
        <div className='p2' />
        <button>Create Account</button>
        <div className='p2' />
        <button onClick={closePopup}>Cancel</button>
        <div className='p2' />
      </div>
    </div>
  ) : (
    ''
    );
    const login_data = useState({
      UserName: '',
      Gmail: '',
      Password: '',
    })
  };
  
  export const UGP_varification = () => {
    console.log(login_data)
  }
  export default SignInPopup;
  