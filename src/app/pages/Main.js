import CreateForm from './CreateForm';
import Footer from './Footer';
import ReportTable from './ReportTable'
import { useState } from 'react';
import { timeSlots }  from './Data';
import { useEffect } from 'react';
import axios from 'axios';
function Main() {
    const [cookieStands, setCookieStands] = useState([]);
    const [error, setError] = useState([]);
  
    const handleCookieStandCreate = (newCookieStand) => {
      setCookieStands([...cookieStands, newCookieStand]);
      fetchCookieStands(); // Fetch the data again after creating a new cookie stand
    };
  
    const fetchCookieStands = () => {
      const apiUrl = 'https://salamoncookies.azurewebsites.net/api/cookiestands';
      
      axios
        .get(apiUrl)
        .then((response) => {
          setCookieStands(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    };
  
    useEffect(() => {
      fetchCookieStands(); // Initial fetch
    }, []);

    return (
        <>
          <CreateForm onCookieStandCreate={handleCookieStandCreate} />
          <ReportTable hours={timeSlots} reports={cookieStands} fetchCookieStands={fetchCookieStands}/>
          <Footer reports={cookieStands} />
        </>
      );
    }
    
    export default Main;