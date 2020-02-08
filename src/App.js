import React, { useState } from "react";
import DataTable from "./DataTable";
import Form from "./Form";
import SearchHistory from "./SearchHistory";
import ToggleImage from "./layout/ToggleImage";
import { Collapse } from "react-collapse";
import Markdown from "./Markdown"
// import {Platform, StyleSheet} from 'react';
//
// const styles = StyleSheet.create({
//   height: Platform.OS === 'ios' ? 200 : 100,
// });
//
// console.log(styles)
// Global starting variables
const PORT = 8000;
const LOCAL = true;
function App() {
  // Starting Function
  const baseUrlCreator = (port, ticker, startDate, endDate, maDays, image, local=false, excel) => {
    console.log("\n\n\n\nInside baseUrlCreator");

    let cleanTicker = ticker.split(",").map(x => x.trim());
    cleanTicker = JSON.stringify(cleanTicker);

    if (excel) {
      if (local) {
        return `http://127.0.0.1:${port}/stocks_excel?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      } else {
        return `http://drenr.com/api/stocks_excel?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      }
    }

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
  const [userQuery, setUserQuery] = useState("BOA, M, F, AKRX");
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
    false,
    LOCAL,
    false
  );
  const initialBaseUrlImage = baseUrlCreator(
    PORT,
    userQuery,
    userStartDate,
    userEndDate,
    maDays,
    true,
    LOCAL,
      false
  );

  const initialBaseExcel = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      false,
      LOCAL,
      true
  );

  console.log(`IBE: ${initialBaseExcel}`);
  const [baseUrl, setBaseUrl] = useState(initialBaseUrl);
  const [baseUrlImage, setBaseUrlImage] = useState(initialBaseUrlImage);
  const [baseExcel, setBaseExcel] = useState(initialBaseExcel);
  const [htmlUrl, setHtmlUrl] = useState(  'http://drenr.com/api/html?stocks=["BOA", "M", "F", "AKRX"]');
  const [priorSearches, setPriorSearches] = useState([]);

  const searchQuery = () => {
    console.log("Inside searchQuery");
    const newBaseUrl = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      false,
      LOCAL,
        false
    );

    const newBaseUrlImage = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      true,
      LOCAL,
        false
    );

    const newBaseExcel = baseUrlCreator(
        PORT,
        userQuery,
        userStartDate,
        userEndDate,
        maDays,
        false,
        LOCAL,
        true
    );
    // #1
    setBaseUrl(newBaseUrl);
    setBaseUrlImage(newBaseUrlImage);
    setBaseExcel(newBaseExcel);
    let cleanTicker = userQuery.split(",").map(x => x.trim());
    cleanTicker = JSON.stringify(cleanTicker);
    setHtmlUrl(`http://drenr.com/api/html?stocks=${cleanTicker}`);
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
                   setBaseUrl={setBaseUrl}
                   baseExcel={baseExcel}/>
      </Collapse>

      <Markdown htmlUrl={htmlUrl}/>

      <SearchHistory priorSearches={priorSearches} />

    </div>
  );
}

export default App;
