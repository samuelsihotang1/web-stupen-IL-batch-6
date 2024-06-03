import classes from './SignIn.module.css';
import { useState } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const SignIn: FC = memo(function SignIn() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    window.location.href = '/login'; // Redirect to homepage
  };

  const handleSignInClick = () => {
    navigate('/signup'); // Redirect to login page
  };

  return (
    <div>
      <div className={classes.rectangle146}></div>
      <div className={classes.logoEcoWarriors21}></div>
      <div className={classes.signInContainer}>
        <div className={classes.title}>Already Have an Account?</div>
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
          Sign In
        </button>
        <div className={classes.signInWithGoogleContainer}>
          <img src="public/real_assets/img/google.png" alt="Google Logo" className={classes.googleLogo} />
          <button className={classes.signInWithGoogleButton}>Sign in with Google</button>
        </div>
        <div className={classes.signInLink}>
          Doesn't have an account? <span className={classes.signInText} onClick={handleSignInClick}>Sign Up</span>
        </div>
      </div>
    </div>
  );
});

export default SignIn;
