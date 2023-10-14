import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function ReportTable({ hours, reports,fetchCookieStands }) {
    const totalHourlySales = new Array(hours.length).fill(0);
    const [error, setError] = useState([]);
    
    const onDelete = async (standId) => {
      try {
        const response = await axios.delete(`https://salamoncookies.azurewebsites.net/api/cookiestands/${standId}`);
  
        if (response.status === 204) {
          // Successfully deleted the cookie stand
          console.log('Cookie stand deleted successfully');
          
          fetchCookieStands()
         
        } else {
          // Handle any errors or responses based on your API's design
          console.error('Error deleting the cookie stand');
        }
      } catch (error) {
        console.error('An error occurred while sending the DELETE request:', error);
      }
    }  
   
    return (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cookie Stand Reports</h2>
          {reports.length === 0 ? (
            <h2 className="text-gray-600">No Cookie Stands Available</h2>
          ) : (
            <table className="w-full border-collapse">
              <thead>
            <tr>
              <th className="border p-2">Location</th>
              {hours.map((hour, index) => (
                <th key={index} className="border p-2">
                  {hour}
                </th>
              ))}
            
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index}>
                    <td className="border p-2">{report.location}</td>
                    {Array.isArray(report.hourlySales) && report.hourlySales.map((curr, hourIndex) => (
                      <React.Fragment key={hourIndex}>
                        <td className="border p-2">{curr ? curr.salesAmount : 0}</td>
                      </React.Fragment>
                    ))}
                    <td className="border p-2">
                      <button onClick={() => onDelete(report.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th className="border p-2">Totals</th>
                  {Array.from({ length: 14 }, (_, index) => (
                    <td key={index} className="border p-2">
                      {reports.reduce((acc, curr) => {
                        const salesAmount = curr.hourlySales && curr.hourlySales[index] ? curr.hourlySales[index].salesAmount : 0;
                        return acc + salesAmount;
                      }, 0)}
                    </td>
                  ))}
                  <td className="border p-2">
                    {Array.isArray(reports) && reports.reduce((acc, curr) => acc + (curr.hourlySales && curr.hourlySales[0] ? curr.hourlySales[0].salesAmount : 0), 0)}
                  </td>
                  <td className="border p-2"></td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      );
    }
    export default ReportTable ;