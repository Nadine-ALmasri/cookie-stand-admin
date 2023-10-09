import { useState } from 'react';
import { timeSlots }  from './Data';


function CreateForm({ onCookieStandCreate }){
    const [location, setLocation] = useState('');
    const [minCustomers, setMinCustomers] = useState('');
    const [maxCustomers, setMaxCustomers] = useState('');
    const [avgCookiesPerSale, setAvgCookiesPerSale] = useState('');
    const [hourlySales, setHourlySales] = useState([48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]);
    const [lastCreatedCookieStand, setLastCreatedCookieStand] = useState(null);
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newCookieStand = {
        location,
        minCustomers: Number(minCustomers),
        maxCustomers: Number(maxCustomers),
        avgCookiesPerSale: Number(avgCookiesPerSale),
        hourly_sales: hourlySales,
      };
  
      onCookieStandCreate(newCookieStand);
      setLastCreatedCookieStand(newCookieStand);
      setLocation('');
      setMinCustomers('');
      setMaxCustomers('');
      setAvgCookiesPerSale('');
      
    };
  
return(


    <>
    <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
  
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="minCustomers"
          >
            Minimum Customers
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="minCustomers"
            type="number"
            placeholder="Min Customers"
            value={minCustomers}
            onChange={(e) => setMinCustomers(e.target.value)}
            required
          />
        </div>
  
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="maxCustomers"
          >
            Maximum Customers
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="maxCustomers"
            type="number"
            placeholder="Max Customers"
            value={maxCustomers}
            onChange={(e) => setMaxCustomers(e.target.value)}
            required
          />
        </div>
  
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="avgCookiesPerSale"
          >
            Average Cookies Per Sale
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="avgCookiesPerSale"
            type="number"
            step="0.01"
            placeholder="Avg Cookies Per Sale"
            value={avgCookiesPerSale}
            onChange={(e) => setAvgCookiesPerSale(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Cookie Stand
          </button>
        </div>
        {lastCreatedCookieStand && (
          <div>
            Last Created Cookie Stand JSON Data:
            <pre>{JSON.stringify(lastCreatedCookieStand, null, 2)}</pre>
          </div>)}
      </form>
    
    
    
    
    </>
)
}
export default CreateForm ;