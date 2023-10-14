import { useState } from "react";

const RegisterComponent = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    onRegister(username, password, email, phone);
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
      <h2 style={{ color: 'green' }}>Register</h2>
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
      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="phone" style={labelStyle}>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button
        type="button"
        onClick={handleRegister}
        style={buttonStyle}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterComponent;
