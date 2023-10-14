import CookieStandForm from "./CookieStandForm";
import axios from "axios";
import LoginComponent from "./LoginComponent"
import RegisterComponent from"./RegisterComponent";
import { useState } from "react";
import { mutate } from "swr";
const HomeComponant = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);
  
    const handleLogin = async (username, password) => {
      const log = {
        UserName: username,
        Password: password,
      };
  
      try {
        const response = await axios.post('https://salamoncookies.azurewebsites.net/Login', log, {
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.status === 200) {
          setLoggedIn(true);
          setError(null);
        } else {
          const data = response.data;
          setError(data.message);
        }
      } catch (error) {
        setError('An error occurred while logging in.');
      }
    };
  
    const handleRegister = async (username, password, email, phone) => {
      const reg = {
        UserName: username,
        Email: email,
        Password: password,
        Phone: phone,
      };
  
      try {
        const response = await axios.post('https://salamoncookies.azurewebsites.net/Register', reg, {
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.status === 200) {
          setLoggedIn(true);
          setError(null);
        } else {
          const data = response.data;
          setError(data.message);
        }
      } catch (error) {
        setError('An error occurred while registering.');
      }
    };
  
    return (
      <div>
        {loggedIn ? (
          <CookieStandForm />
        ) : (
          <div>
            <LoginComponent onLogin={handleLogin} />
            <RegisterComponent onRegister={handleRegister} />
            {error && <p className="text-red-500 my-4">{error}</p>}
          </div>
        )}
      </div>
    );
  };
  
  export default HomeComponant;