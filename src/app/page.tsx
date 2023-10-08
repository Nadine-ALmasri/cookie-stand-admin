
"use client" ;
import Image from 'next/image'
import { useState } from 'react';
import Footer from './pages/Footer';
import Header from './pages/Header';
import CookieStandForm from './pages/CookieStandForm';

export default function Home() {
 
 
   // Initialize an array to store cookie stands
   const [cookieStands, setCookieStands] = useState([]);

   // Function to handle creating a new cookie stand
   const handleCookieStandCreate = (newCookieStand) => {
     // Add the new cookie stand to the array
     setCookieStands([...cookieStands, newCookieStand]);
   };
   return (
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
       </div></div>
 <Footer/>
    </>
   );
  
 }
 


