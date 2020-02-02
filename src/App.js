import React, { useState } from 'react';
import DataTable from './DataTable';
import Inputs from "./Inputs";

const PORT = 6287;

function App() {

    const baseUrlCreator = (PORT, ticker, startDate, endDate) => {
        return `http://127.0.0.1:${PORT}/get_stocks_data?stocks=["${ticker}"]&startDate=${startDate}&endDate=${endDate}`;
    };

    const [userQuery, setUserQuery] = useState('AAPL');
    const [baseUrl, setBaseUrl] = useState(baseUrlCreator(PORT, 'AAPL', '2019-01-01', '2020-01-01'));
    const [priorSearches, updatePriorSearches] = useState([baseUrl]);

    const updateUserQuery = event => {
        event.preventDefault();
      setUserQuery(event.target.value);
    };

    const searchQuery = () => {
        const newBaseUrl = baseUrlCreator(PORT, userQuery, '2019-01-01', '2020-01-01');
        setBaseUrl(newBaseUrl);
        updatePriorSearches([
            ...priorSearches, newBaseUrl
        ])
        setUserQuery('');
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
      <DataTable baseUrl={baseUrl} setBaseUrl={setBaseUrl}/>
      <h1>Old Searches</h1>
        <hr/>
        {
            priorSearches.map((x) => {
                return (
                    <div>
                        <p>{x}</p>
                    </div>
                )
            })
        }
        <hr/>
    </div>
  );
}

export default App;
