import React, { useState } from "react";
import Images from "../Images";
import { Collapse } from "react-collapse";

const ToggleImage = props => {
  const [hider, updateHider] = useState(false);
  const hideImage = e => {
    updateHider(!hider);
  };
  return (
    <div>
      {hider ? (
        <button className='page-button' onClick={hideImage}>Hide Image</button>
      ) : (
        <button className='page-button' onClick={hideImage}>Show Image</button>
      )}
      <Collapse isOpened={hider}>
        <Images baseUrlImage={props.baseUrlImage} baseUrl={props.baseUrl} />
      </Collapse>
    </div>
  );
};

export default ToggleImage;
