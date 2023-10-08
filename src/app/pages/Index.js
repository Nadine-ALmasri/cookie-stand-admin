import Footer from './Footer';
import Header from './Header';
import CookieStandForm from './CookieStandForm';
import { useState } from 'react';

function Index (){
  // Initialize an array to store cookie stands k
  const [cookieStands, setCookieStands] = useState([]);

  // Function to handle creating a new cookie stand
  const handleCookieStandCreate = (newCookieStand) => {
    // Add the new cookie stand to the array
    setCookieStands([...cookieStands, newCookieStand]);
  };
    return(
    <>
    <Header/>
  
    <div>
     
       <CookieStandForm onCookieStandCreate={handleCookieStandCreate} />
       <div className='text-white' >
            <h2>Cookie Stands</h2>
            <ul >
              {cookieStands.map((cookieStand, index) => (
                <li key={index}>
                  Location: {cookieStand.location}, Min Customers: {cookieStand.minCustomers}, Max Customers: {cookieStand.maxCustomers}, Avg Cookies Per Sale: {cookieStand.avgCookiesPerSale}
                </li>
              ))}
            </ul>
          </div>
          </div>
    <Footer/>
    </>)
}
export default Index ;