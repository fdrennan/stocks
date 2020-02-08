import React, {useState} from "react";
import { Collapse } from "react-collapse";

function DrawPad(props) {
    const [hider, setHider] = useState(false);


    const hideTable = () => {
        setHider(!hider);
    };

    return (
        <div>
            {hider ? (
                <button className='page-button' onClick={hideTable}>Hide Markdown Options</button>
            ) : (
                <button className='page-button' onClick={hideTable}>Show Markdown Options</button>
            )}

            <Collapse isOpened={hider}>{<div>
                <h1>Hello From Drawpad</h1>
            </div>}</Collapse>

        </div>
    );
}

export default DrawPad;
