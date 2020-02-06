import React, { useState } from "react";
import DataTable from "./DataTable";
import Form from "./Form";
import SearchHistory from "./SearchHistory";
import ToggleImage from "./layout/ToggleImage";
import { Collapse } from "react-collapse";

// Global starting variables
const PORT = 8827;

function App() {
  // Starting Function
  const baseUrlCreator = (port, ticker, startDate, endDate, maDays, image, local=false) => {
    console.log("\n\n\n\nInside baseUrlCreator");

    let cleanTicker = ticker.split(",").map(x => x.trim());
    cleanTicker = JSON.stringify(cleanTicker);
    if (image) {
      if (local) {
        return `http://127.0.0.1:${port}/get_stocks?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      } else {
        return `http://drenr.com/api/get_stocks?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      }

    } else {
      if(local) {
        return `http://127.0.0.1:${port}/get_stocks_data?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}`;
      } else {
        return `http://drenr.com/api/get_stocks_data?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}`;
      }
    }
  };

  // APPLICATION STARTING VARIABLES
  const [userQuery, setUserQuery] = useState("AAPL");
  const [userStartDate, setUserStartDate] = useState("2019-01-01");
  const [userEndDate, setUserEndDate] = useState("2020-01-01");
  const [maDays, setMaDays] = useState("5");
  const [apiMessage, setApiMessage] = useState(undefined);
  const initialBaseUrl = baseUrlCreator(
    PORT,
    userQuery,
    userStartDate,
    userEndDate,
      maDays,
    false
  );
  const initialBaseUrlImage = baseUrlCreator(
    PORT,
    userQuery,
    userStartDate,
    userEndDate,
      maDays,
    true
  );
  const [baseUrl, setBaseUrl] = useState(initialBaseUrl);
  const [baseUrlImage, setBaseUrlImage] = useState(initialBaseUrlImage);
  const [priorSearches, setPriorSearches] = useState([]);

  const searchQuery = () => {
    console.log("Inside searchQuery");
    const newBaseUrl = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      false
    );
    const newBaseUrlImage = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      true
    );
    // #1
    setBaseUrl(newBaseUrl);
    setBaseUrlImage(newBaseUrlImage);
    // #2
    setPriorSearches([...priorSearches, newBaseUrl]);
  };


  return (
    <div className="App">
      {
        apiMessage ? <div>{apiMessage}</div> : <div>{apiMessage}</div>
      }
      <Form
        searchQuery={searchQuery}
        userQuery={userQuery}
        maDays={maDays}
        setMaDays={setMaDays}
        userStartDate={userStartDate}
        setUserStartDate={setUserStartDate}
        setUserEndDate={setUserEndDate}
        userEndDate={userEndDate}
        setUserQuery={setUserQuery}
      />
      <br/>
      <ToggleImage baseUrlImage={baseUrlImage} baseUrl={baseUrl} />

      <Collapse isOpened={true}>
        <DataTable apiMessage={apiMessage}
                   setApiMessage={setApiMessage}
                   baseUrl={baseUrl}
                   setBaseUrl={setBaseUrl} />
      </Collapse>

      <SearchHistory priorSearches={priorSearches} />

    </div>
  );
}

export default App;
