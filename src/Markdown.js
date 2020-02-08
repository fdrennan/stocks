import React, { useState } from "react";
import { Collapse } from "react-collapse";

const Markdown = props => {
    const [hider, updateHider] = useState(false);

    const hideImage = e => {
        updateHider(!hider);
    };
    return (
        <div>
            {hider ? (
                <button className='page-button' onClick={hideImage}>Hide Markdown</button>
            ) : (
                <button className='page-button' onClick={hideImage}>Show Markdown</button>
            )}
            <Collapse isOpened={hider}>

                <h3>HTML</h3>
                <iframe className='markdown' src={props.htmlUrl} frameBorder='0'></iframe>
                <h3>PDF</h3>
                <iframe className='markdown' src='http://127.0.0.1:8000/pdf' frameBorder = '0'> </iframe>
            </Collapse>
        </div>
    );
};

export default Markdown;

