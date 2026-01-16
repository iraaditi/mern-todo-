import React, { useState } from 'react';
import styles from './Auth.module.css';

const Auth = ({ onLogin }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await onLogin(email, password, isSignIn);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setError('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.logo}>✓ Todo</h1>
        <p className={styles.subtitle}>Minimalist Task Management</p>
        
        <div className={styles.toggleContainer}>
          <button
            className={`${styles.toggleBtn} ${isSignIn ? styles.active : ''}`}
            onClick={() => setIsSignIn(true)}
            type="button"
          >
            Sign In
          </button>
          <button
            className={`${styles.toggleBtn} ${!isSignIn ? styles.active : ''}`}
            onClick={() => setIsSignIn(false)}
            type="button"
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="6"
              autoComplete={isSignIn ? 'current-password' : 'new-password'}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Loading...' : isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className={styles.switchText}>
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <button onClick={toggleMode} className={styles.switchBtn} type="button">
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
