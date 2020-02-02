import React, { useState } from 'react';
import DataTable from './DataTable';
import Inputs from "./Inputs";
import {useFetch} from "./hooks";

const PORT = 6287;

function App() {
  const [userQuery, setUserQuery] = useState('AAPL');
  const baseUrlCreator = (PORT, ticker, startDate, endDate) => {
      return `http://127.0.0.1:${PORT}/get_stocks_data?stocks=["${ticker}"]&startDate=${startDate}&endDate=${endDate}`;
  };
  const [baseUrl, setBaseUrl] = useState(baseUrlCreator(PORT, 'AAPL', '2019-01-01', '2020-01-01'));

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

    const searchQuery = () => {
        setBaseUrl(baseUrlCreator(PORT, userQuery, '2019-01-01', '2020-01-01'));
    };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();

    }
  };



  return (
    <div className="App">
      <h1>Hello David</h1>
      <div className='form' onSubmit={searchQuery}>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Inputs />
      <DataTable baseUrl={baseUrl}/>
    </div>
  );
}

export default App;
