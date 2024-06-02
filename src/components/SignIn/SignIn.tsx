import React, { useState, memo, FC } from 'react';
import classes from './SignIn.module.css';

export const SignIn: FC = memo(function SignIn() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccountClick = () => {
    // You can add the account creation logic here
    // After successful creation, redirect to the homepage
    window.location.href = '/login'; // Redirect to homepage
  };

  return (
    <div>
      <div className={classes.rectangle146}></div>
      <div className={classes.logoEcoWarriors21}> </div>
      <div className={classes.signInContainer}>
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
        <button 
          className={classes.createAccountButton} 
          onClick={handleCreateAccountClick}
        >
          Create Account
        </button>
        <div className={classes.signInWithGoogleContainer}>
          <img src="public/real_assets/img/google.png" alt="Google Logo" className={classes.googleLogo} />
          <button className={classes.signInWithGoogleButton}>Sign in with Google</button>
        </div>
        <div className={classes.signInLink}>
          Already have an account? <span className={classes.signInText}>Sign in</span>
        </div>
      </div>
    </div>
  );
});

export default SignIn;
