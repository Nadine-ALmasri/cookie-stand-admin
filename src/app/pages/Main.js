import CreateForm from './CreateForm';
import Footer from './Footer';
import ReportTable from './ReportTable'
import { useState } from 'react';
import { timeSlots }  from './Data';

function Main (){
     // Initialize an array to store cookie stands k
  const [cookieStands, setCookieStands] = useState([]);

  // Function to handle creating a new cookie stand
  const handleCookieStandCreate = (newCookieStand) => {
    // Add the new cookie stand to the array
    setCookieStands([...cookieStands, newCookieStand]);
  };
    return(

    <>
<CreateForm  onCookieStandCreate={handleCookieStandCreate}/>
<div>
     
    
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
        <ReportTable hours={timeSlots} reports={cookieStands} />
        <Footer reports={cookieStands}/>
</>
    )
}
export default Main ;