import React from "react";

const Images = props => {
  return (
    <div>
      <img className="gg-plot" src={props.baseUrlImage} alt="Oops! Something went wrong." />
    </div>
  );
};

export default Images;
