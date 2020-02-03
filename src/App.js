import React, { useState } from "react";
import DataTable from "./DataTable";

// Global starting variables
const PORT = 5906;

function App() {
  // Starting Function
  const baseUrlCreator = (port, ticker, startDate, endDate) => {
    console.log("\n\n\n\nInside baseUrlCreator");
    return `http://127.0.0.1:${port}/get_stocks_data?stocks=["${ticker}"]&startDate=${startDate}&endDate=${endDate}`;
  };

  // APPLICATION STARTING VARIABLES
  const [userQuery, setUserQuery] = useState("AAPL");
  const [userStartDate, setUserStartDate] = useState("2019-01-01");
  const [userEndDate, setUserEndDate] = useState("2019-03-01");
  const initialBaseUrl = baseUrlCreator(
    PORT,
    userQuery,
    userStartDate,
    userEndDate
  );
  const [baseUrl, setBaseUrl] = useState(initialBaseUrl);
  const [priorSearches, setPriorSearches] = useState([]);

  const searchQuery = () => {
    console.log("Inside searchQuery");
    const newBaseUrl = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate
    );
    // #1
    setBaseUrl(newBaseUrl);
    // #2
    setPriorSearches([...priorSearches, newBaseUrl]);
  };

  const updateUserQuery = event => {
    console.log("Inside updateUserQuery");
    event.preventDefault();
    setUserQuery(event.target.value);
  };

  const handleKeyPress = event => {
    console.log("Inside handleKeyPress");
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const handleStartDate = event => {
    console.log("Inside handleStartDate");
    setUserStartDate(event.target.value);
  };

  const handleEndDate = event => {
    console.log("Inside handleStartDate");
    setUserEndDate(event.target.value);
  };

  return (
    <div className="App">
      <h1>Stock Explorer</h1>
      <div className="form" onSubmit={searchQuery}>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <input type="date" value={userStartDate} onChange={handleStartDate} />
        <input type="date" value={userEndDate} onChange={handleEndDate} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <DataTable baseUrl={baseUrl} setBaseUrl={setBaseUrl} />
      <h1>Old Searches</h1>
      <hr />
      {priorSearches.map((list, index) => {
        console.log(list);
        return (
          <div key={index}>
            <p>{list}</p>
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default App;
