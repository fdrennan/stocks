import React from "react";

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

  return (
    <div onSubmit={props.searchQuery} className="form-display">
      <input
        className="input"
        value={props.userQuery}
        onChange={updateUserQuery}
        onKeyPress={handleKeyPress}
      />
      <input
        type="date"
        value={props.userStartDate}
        onChange={handleStartDate}
        onKeyPress={handleKeyPress}
      />
      <input
        type="date"
        value={props.userEndDate}
        onChange={handleEndDate}
        onKeyPress={handleKeyPress}
      />
      <button onClick={props.searchQuery}>Search</button>
    </div>
  );
}

export default Form;
