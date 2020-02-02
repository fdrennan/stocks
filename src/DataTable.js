import React from 'react';
import { useFetch } from './hooks';

const PORT = 6287;

let baseUrl = `http://127.0.0.1:${PORT}/get_stocks_data?stocks=["${'AAPL'}"]&startDate=${'2019-01-01'}&endDate=${'2019-02-01'}`;

function DataTable(props) {
  const { message, data } = useFetch(baseUrl, {});

  const cleanData = data => {
    if (data) {
        return JSON.parse(data).map(
          (x) => {
            return (
                <tr key={x.date}>
                    <td key={1}>{x.date}</td>
                    <td key={2}>{x.open}</td>
                    <td key={3}>{x.high}</td>
                    <td key={4}>{x.low}</td>
                    <td key={5}>{x.close}</td>
                    <td key={6}>{x.volume}</td>
                    <td key={7}>{x.adjusted}</td>
                </tr>
            )
          }
      );
    }
  };

  const parsedData = cleanData(data);

  return (
    <div>
      <h3>MetaData</h3>
      <p><em>{message}</em></p>
            <div>
              <table>
                  <tbody>
                  <tr>
                      <td>Date</td>
                      <td>Open</td>
                      <td>High</td>
                      <td>Low</td>
                      <td>Close</td>
                      <td>Volume</td>
                      <td>Adjusted</td>
                  </tr>
                  {parsedData}
                  </tbody>
              </table>
            </div>
    </div>
  )
}

export default DataTable;
