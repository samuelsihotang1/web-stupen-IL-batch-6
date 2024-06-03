import { useState } from 'react';
import { memo } from 'react';
import type { FC } from 'react';
import classes from './Login.module.css';

export const Login: FC = memo(function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {

    window.location.href = '/'; 
  };

  return (
    <div>
      <div className={classes.rectangle146}></div>
      <div className={classes.logoEcoWarriors21}></div>
      <div className={classes.frame1000006052}>
        <div className={classes.logIn}>Log in</div>
        
        {/* Username */}
        <div className={classes.inputWrapper}>
          <input
            type="text"
            className={classes.usernameInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        
        {/* Password */}
        <div className={classes.inputWrapper}>
          <input
            type="password"
            className={classes.passwordInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button className={classes.button} onClick={handleLoginClick}>
          <div className={classes.font}>Login</div>
        </button>
        <div className={classes.forgetPassword}>Forget Password?</div>
      </div>
    </div>
  );
});
