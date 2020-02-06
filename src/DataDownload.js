import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { CSVLink } from "react-csv";

const DataDownload = props => {
    // const [hider, updateHider] = useState(false);
    // const hideImage = e => {
    //     updateHider(!hider);
    // };

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

    return (
        <div>
            {props.data && (
                <CSVLink
                    data={jsonToCSV(props.data)}
                    filename={"stock-data.csv"}
                    target="data"
                >
                    <h3>Download</h3>
                </CSVLink>
            )
            }
        </div>
    )
};

export default DataDownload;
