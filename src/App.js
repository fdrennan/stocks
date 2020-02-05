import React, { useState } from "react";
import DataTable from "./DataTable";
import Form from "./Form";
import SearchHistory from "./SearchHistory";
import ToggleImage from "./layout/ToggleImage";
import { Collapse } from "react-collapse";

const practice = () => {
  const input = "AAPL, DJIA".split(",").map(x => x.trim());
  const jsonOutput = JSON.stringify(input);
  console.log(jsonOutput);
};

practice();

// Global starting variables
const PORT = 8000;

function App() {
  // Starting Function
  const baseUrlCreator = (port, ticker, startDate, endDate, image) => {
    console.log("\n\n\n\nInside baseUrlCreator");

    let cleanTicker = ticker.split(",").map(x => x.trim());
    cleanTicker = JSON.stringify(cleanTicker);
    if (image) {
      return `http://127.0.0.1:${port}/get_stocks?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}`;
    } else {
      return `http://127.0.0.1:${port}/get_stocks_data?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}`;
    }
  };

  // APPLICATION STARTING VARIABLES
  const [userQuery, setUserQuery] = useState("AAPL");
  const [userStartDate, setUserStartDate] = useState("2019-01-01");
  const [userEndDate, setUserEndDate] = useState("2019-03-01");
  const initialBaseUrl = baseUrlCreator(
    PORT,
    userQuery,
    userStartDate,
    userEndDate,
    false
  );
  const initialBaseUrlImage = baseUrlCreator(
    PORT,
    userQuery,
    userStartDate,
    userEndDate,
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
      false
    );
    const newBaseUrlImage = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
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
      <Form
        searchQuery={searchQuery}
        userQuery={userQuery}
        userStartDate={userStartDate}
        setUserStartDate={setUserStartDate}
        setUserEndDate={setUserEndDate}
        userEndDate={userEndDate}
        setUserQuery={setUserQuery}
      />
      <hr />
      <ToggleImage baseUrlImage={baseUrlImage} baseUrl={baseUrl} />
      <hr />
      <Collapse isOpened={true}>
        <DataTable baseUrl={baseUrl} setBaseUrl={setBaseUrl} />
      </Collapse>
      <hr />
      <SearchHistory priorSearches={priorSearches} />
      <hr />
    </div>
  );
}

export default App;
