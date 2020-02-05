import React from "react";

const Images = props => {
  return (
    <div>
      <img className="gg-plot" src={props.baseUrlImage} alt={props.baseUrl} />
    </div>
  );
};

export default Images;
