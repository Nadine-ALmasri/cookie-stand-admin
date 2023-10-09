function ReportTable({ hours, reports }){
    const totalHourlySales = new Array(hours.length).fill(0);
    
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
              <th className="border p-2">Totals</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td className="border p-2">{report.location}</td>
                {report.hourly_sales.map((sales, index) => (
                  <td key={index} className="border p-2">
                    {sales}
                  </td>
                ))}
                <td className="border p-2">
                  {report.hourly_sales.reduce((acc, curr) => acc + curr, 0)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="border p-2">Totals</th>
              {hours.map((hour, index) => {
                const total = reports.reduce(
                  (acc, curr) => acc + curr.hourly_sales[index],
                  0
                );
                totalHourlySales[index] = total;
                return (
                  <td key={index} className="border p-2">
                    {total}
                  </td>
                );
              })}
              <td className="border p-2">
                {totalHourlySales.reduce((acc, curr) => acc + curr, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );

}
export default ReportTable ;