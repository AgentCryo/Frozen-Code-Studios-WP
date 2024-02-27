import './SignInPopup.css';

export const SignInPopup = (props) => {
  const closePopup = props.closePopup;

  return props.showPopup ? (
    <div className='popup'>
      <div className='sign-in-window'>
        <div className='p2'>Username</div>
        <input type='text' name='UserName' />
        <div className='p2'>Gmail / Email</div>
        <input type='text' name='Gmail' />
        <div className='p2'>Password</div>
        <input type='password' name='Password' />
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
};

export default SignInPopup;
