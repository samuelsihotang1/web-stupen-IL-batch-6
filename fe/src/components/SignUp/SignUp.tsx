import classes from './SignUp.module.css';
import { useState } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const SignUp: FC = memo(function SignUp() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    window.location.href = '/signin'; // Redirect to signin
  };

  const handleSignUpClick = () => {
    navigate('/signin'); // Redirect to signin page
  };

  return (
    <div>
      <div className={classes.rectangle146}></div>
      <div className={classes.logoEcoWarriors21}></div>
      <div className={classes.signUpContainer}>
        <div className={classes.title}>Create an Account</div>
        <div>
          <div className={classes.inputWrapper}>
            <span className={classes.inputLabel}>Name</span>
            <input
              type="text"
              className={classes.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className={classes.inputWrapper}>
            <span className={classes.inputLabel}>Email</span>
            <input
              type="email"
              className={classes.inputField}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <div className={classes.inputWrapper}>
            <span className={classes.inputLabel}>Password</span>
            <input
              type="password"
              className={classes.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button className={classes.createAccountButton} onClick={handleCreateAccountClick}>
          Create Account
        </button>
        <div className={classes.signUpWithGoogleContainer}>
          <img src="public/real_assets/img/google.png" alt="Google Logo" className={classes.googleLogo} />
          <button className={classes.signUpWithGoogleButton}>Sign in with Google</button>
        </div>
        <div className={classes.signUpLink}>
          Already have an account? <span className={classes.signUpText} onClick={handleSignUpClick}>Sign In</span>
        </div>
      </div>
    </div>
  );
});

export default SignUp;
