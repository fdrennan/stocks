import React from "react";
import { Collapse } from "react-collapse";

function Form(props) {
  const handleStartDate = event => {
    console.log("Inside handleStartDate");
    props.setUserStartDate(event.target.value);
  };

  const handleEndDate = event => {
    console.log("Inside handleStartDate");
    props.setUserEndDate(event.target.value);
  };

  const updateUserQuery = event => {
    console.log("Inside updateUserQuery");
    event.preventDefault();
    props.setUserQuery(event.target.value);
  };

  const handleKeyPress = event => {
    console.log("Inside handleKeyPress");
    if (event.key === "Enter") {
      props.searchQuery();
    }
  };

  const handleMaDays = event => {
    event.preventDefault();
    props.setMaDays(event.target.value);
  };

  const handleStockSelector = event => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.value);
  };

  return (
    <div>
      <Collapse isOpened={true}>
        <div onSubmit={props.searchQuery} className="form-display">
          <div className="form-input">
            <label htmlFor="query">Query</label>
            <input
              className="input"
              value={props.userQuery}
              onChange={updateUserQuery}
              onKeyPress={handleKeyPress}
              id="query"
            />
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              value={props.userStartDate}
              onChange={handleStartDate}
              onKeyPress={handleKeyPress}
              id="start-date"
            />
            <label htmlFor="end-date">End Date</label>
            <input
              type="date"
              value={props.userEndDate}
              onChange={handleEndDate}
              onKeyPress={handleKeyPress}
              id="end-date"
            />
            <label htmlFor="ma-days">Moving Average Days</label>
            <input
              type="numeric"
              value={props.maDays}
              onChange={handleMaDays}
              onKeyPress={handleKeyPress}
              id="ma-days"
            />
            <button className="form-button" onClick={props.searchQuery}>
              Search
            </button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Form;
