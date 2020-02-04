import React from "react";

const SearchHistory = props => {
  return (
    <div>
      <h1>Old Searches</h1>
      {props.priorSearches.map((list, index) => {
        console.log(list);
        return (
          <div key={index}>
            <p>{list}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistory;
