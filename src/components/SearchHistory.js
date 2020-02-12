import React, { useState } from "react";
import { Collapse } from "react-collapse";

const SearchHistory = props => {
  const [hideSearch, updateHideSearch] = useState(true);

  const searchHider = e => {
    updateHideSearch(!hideSearch);
  };
  return (
    <div>
      {hideSearch ? (
        <button className="page-button" onClick={searchHider}>
          Hide Searches
        </button>
      ) : (
        <button className="page-button" onClick={searchHider}>
          Show Searches
        </button>
      )}
      <Collapse isOpened={hideSearch}>
        {props.priorSearches.map((list, index) => {
          console.log(list);
          return (
            <div key={index}>
              <p>{list}</p>
            </div>
          );
        })}
      </Collapse>
    </div>
  );
};

export default SearchHistory;
