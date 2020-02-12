import React, { useState } from "react";
import { CSVLink } from "react-csv";
import CSVReader from "react-csv-reader";
import { Collapse } from "react-collapse";
import { jsonToCSV } from "react-papaparse";
import { useFetch } from "./hooks";
import ReactUploadFile from "react-upload-file";

const CsvReader = props => {
  const [csvData, updateCsvData] = useState(undefined);
  const [csvString, updateCsvString] = useState(undefined);
  const [hider, setHider] = useState(false);
  const [csvUrl, updateCsvUrl] = useState(
    "http://127.0.0.1:9266/submit_data?csv_file=12345"
  );

  const response = useFetch(csvUrl, {});

  const updateCsv = data => {
    if (response) {
      console.log("Resp exists");
      updateCsvData(data);
      console.log("Reading CSV ");
      console.log(data);
      const fromJSON = jsonToCSV(data);
      console.log("fromJSON");
      console.log(fromJSON);

      console.log("toJSON");
      const toJSON = JSON.stringify(data);
      updateCsvString(fromJSON);

      const demo = toJSON.split(",").length;
      console.log(demo);
      updateCsvUrl(
        `http://127.0.0.1:9266/submit_data?csv_file=${toJSON.split(",").length}`
      );
    }
  };

  const parseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

  const hideTable = () => {
    setHider(!hider);
  };

  return (
    <div>
      {hider ? (
        <button className="page-button" onClick={hideTable}>
          Hide I/O
        </button>
      ) : (
        <button className="page-button" onClick={hideTable}>
          Show I/O
        </button>
      )}
      <Collapse isOpened={hider}>
        {
          <div>
            <h1>File Upload</h1>
            <CSVReader onFileLoaded={updateCsv} parserOptions={parseOptions} />
            <h1>File Download</h1>
            {csvData && (
              <CSVLink data={csvData}>
                <h1>Download me</h1>
              </CSVLink>
            )}
          </div>
        }
      </Collapse>
    </div>
  );
};

export default CsvReader;
