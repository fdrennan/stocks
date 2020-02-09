import React, { useState } from "react";
import DataTable from "./DataTable";
import Form from "./Form";
import SearchHistory from "./SearchHistory";
import ToggleImage from "./layout/ToggleImage";
import { Collapse } from "react-collapse";
import Markdown from "./Markdown";

const PORT = 8000;
const LOCAL = false;

function App() {
  // Starting Function
  const baseUrlCreator = (
    port,
    ticker,
    startDate,
    endDate,
    maDays,
    image,
    local = false,
    excel,
    html,
    pdf
  ) => {
    let cleanTicker = ticker.split(",").map(x => x.trim());
    cleanTicker = JSON.stringify(cleanTicker);

    if (html) {
      if (local) {
        return `http://127.0.0.1:${port}/html?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      } else {
        return `http://drenr.com/api/html?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      }
    }

    if (pdf) {
      if (local) {
        return `http://127.0.0.1:${port}/pdf?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      } else {
        return `http://drenr.com/api/pdf?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      }
    }

    if (excel) {
      if (local) {
        return `http://127.0.0.1:8000/stocks_excel?stocks=${cleanTicker}`;
      } else {
        return `http://drenr.com/api/stocks_excel?stocks=${cleanTicker}`;
      }
    }

    if (image) {
      if (local) {
        return `http://127.0.0.1:${port}/get_stocks?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      } else {
        return `http://drenr.com/api/get_stocks?stocks=${cleanTicker}&startDate=${startDate}&endDate=${endDate}&ma_days=${maDays}`;
      }
    } else {
      if (local) {
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
    false,
    false,
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
    false,
    false,
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
    true,
    false,
      false
  );

  const initialBaseHtml = baseUrlCreator(
    PORT,
    userQuery,
    userStartDate,
    userEndDate,
    maDays,
    false,
    LOCAL,
    false,
    true,
      false
  );

  const initialBasePdf = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      false,
      LOCAL,
      false,
      false,
      true
  );

  const [baseUrl, setBaseUrl] = useState(initialBaseUrl);
  const [baseUrlImage, setBaseUrlImage] = useState(initialBaseUrlImage);
  const [baseExcel, setBaseExcel] = useState(initialBaseExcel);
  const [htmlUrl, setHtmlUrl] = useState(initialBaseHtml);
  const [pdfUrl, setPdfUrl] = useState(initialBasePdf);
  const [priorSearches, setPriorSearches] = useState([]);

  const searchQuery = () => {
    const newBaseUrl = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      false,
      LOCAL,
      false,
        false,
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
      false,
        false,
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
      true,
      false,
        false
    );

    const newBaseHtml = baseUrlCreator(
      PORT,
      userQuery,
      userStartDate,
      userEndDate,
      maDays,
      false,
      LOCAL,
      false,
      true,
        false
    );

    const newBasePdf = baseUrlCreator(
        PORT,
        userQuery,
        userStartDate,
        userEndDate,
        maDays,
        false,
        LOCAL,
        false,
        false,
        true
    );
    // #1
    setBaseUrl(newBaseUrl);
    setBaseUrlImage(newBaseUrlImage);
    setBaseExcel(newBaseExcel);
    setPdfUrl(newBasePdf);
    console.log('BASE PDF');
    console.log(pdfUrl);
    // let cleanTicker = userQuery.split(",").map(x => x.trim());
    // cleanTicker = JSON.stringify(cleanTicker);
    setHtmlUrl(newBaseHtml);
    // #2
    setPriorSearches([...priorSearches, newBaseUrl]);
  };

  return (
    <div className="App">
      {apiMessage ? <div>{apiMessage}</div> : <div>{apiMessage}</div>}
      {/*<SidebarMenu/>*/}
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
      <br />
      <ToggleImage baseUrlImage={baseUrlImage} baseUrl={baseUrl} />

      <Collapse isOpened={true}>
        <DataTable
          apiMessage={apiMessage}
          setApiMessage={setApiMessage}
          baseUrl={baseUrl}
          setBaseUrl={setBaseUrl}
          baseExcel={baseExcel}
        />
      </Collapse>

      <Markdown htmlUrl={htmlUrl} />

      <SearchHistory priorSearches={priorSearches} />
    </div>
  );
}

export default App;
