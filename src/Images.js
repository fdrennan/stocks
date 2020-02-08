import React from "react";

const Images = props => {
  return (
    <div>
      <img className="gg-plot" src={props.baseUrlImage} alt={props.baseUrlImage} />
    </div>
  );
};

export default Images;
