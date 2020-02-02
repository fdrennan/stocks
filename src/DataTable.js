import React from 'react';
import { useFetch } from './hooks';
import {CSVLink} from "react-csv";


// const PORT = 6287;

// let baseUrl = `http://127.0.0.1:${PORT}/get_stocks_data?stocks=["${'AAPL'}"]&startDate=${'2019-01-01'}&endDate=${'2019-02-01'}`;

function DataTable(props) {

  const { message, data } = useFetch(props.baseUrl, {});

  const cleanData = data => {
    if (data) {
        const dataMap =  (
            JSON.parse(data).map(
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
            )
        );

        return (

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
                     {dataMap}
                    </tbody>
                </table>

        );
    }
  };

  const json2array = json => {
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        return result;
    };

  const jsonToCSV = data => {
    if(data) {
        const returnedData = JSON.parse(data);
        return json2array(returnedData);
    }
  };

  const parsedData = cleanData(data);

  return (
    <div>
      <h3>MetaData</h3>
        {data ? <CSVLink data={jsonToCSV(data)}
                         filename={"stock-data.csv"}
                         target="data">Download Me</CSVLink> : <p>Missing</p>}
        <p><em>{message}</em></p>
        {parsedData}
    </div>
  )
}

export default DataTable;
