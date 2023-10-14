import { useState } from "react";

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  const containerStyle = {
    backgroundColor: 'lightgreen',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: 'green',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: 'green' }}>Login</h2>
      <div>
        <label htmlFor="username" style={labelStyle}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="password" style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button
        type="button"
        onClick={handleLogin}
        style={buttonStyle}
      >
        Login
      </button>
    </div>
  );
};

export default LoginComponent;
