import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import { login } from '../utils/mockApi';
import PropTypes from 'prop-types';
import "../styles/LoginPage.css";

function LoginPage({ onLogin, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      setErrorMessage('Invalid email or password');
      return;
    }
    const success = await login(email, password);
    if (success) {
      onLogin(email, password);
      history.push('/orders');
    } else {
      setErrorMessage('Incorrect email or password');
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button className="form-submit" type="submit">Login</button>
      {errorMessage && <div className="form-error">{errorMessage}</div>}
    </form>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default LoginPage;