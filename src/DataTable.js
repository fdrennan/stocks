import React, { useEffect, useState } from "react";
import { useFetch } from "./hooks";
import { CSVLink } from "react-csv";
import { Collapse } from "react-collapse";

function DataTable(props) {
  const { message, data } = useFetch(props.baseUrl, {});
  const [hider, setHider] = useState(true);

  const json2array = json => {
    console.log("Inside json2array");
    let result = [];
    let keys = Object.keys(json);
    keys.forEach(function(key) {
      result.push(json[key]);
    });

    return result;
  };

  const jsonToCSV = data => {
    console.log("Inside jsonToCSV");
    if (data) {
      console.log("Inside jsonToCSV:data");
      const returnedData = JSON.parse(data);
      return json2array(returnedData);
    }
  };

  const cleanData = data => {
    console.log("Inside cleanData");

    if (data) {
      console.log("Inside cleanData:if(data)");
      const parseData = JSON.parse(data);

      const sortedData = parseData.sort(function(a, b) {
        if (a.date < b.date) return 1;
        if (b.date < a.date) return -1;
        return 0;
      });

      const dataMap = sortedData.map((x, index) => {
        return (
          <tr key={index}>
            <td key={0}>{x.symbol}</td>
            <td key={1}>{x.date}</td>
            <td key={2}>{x.open}</td>
            <td key={3}>{x.high}</td>
            <td key={4}>{x.low}</td>
            <td key={5}>{x.close}</td>
            <td key={6}>{x.volume}</td>
            <td key={7}>{x.adjusted}</td>
          </tr>
        );
      });

      return (
        <table>
          <tbody>
            <tr key={"tbody"}>
              <td key={0}>Symbol</td>
              <td key={1}>Date</td>
              <td key={2}>Open</td>
              <td key={3}>High</td>
              <td key={4}>Low</td>
              <td key={5}>Close</td>
              <td key={6}>Volume</td>
              <td key={7}>Adjusted</td>
            </tr>
            {dataMap}
          </tbody>
        </table>
      );
    }
  };

  const parsedData = cleanData(data);

  const hideTable = () => {
    setHider(!hider);
  };

  return (
    <div>
      {hider ? (
        <button onClick={hideTable}>Hide Table</button>
      ) : (
        <button onClick={hideTable}>Show Table</button>
      )}
      {data ? (
        <CSVLink
          data={jsonToCSV(data)}
          filename={"stock-data.csv"}
          target="data"
        >
          Download Me
        </CSVLink>
      ) : (
        <p>
          <em>{message}</em>
        </p>
      )}
      <Collapse isOpened={hider}>{parsedData}</Collapse>
    </div>
  );
}

export default DataTable;
