import React, { useState } from "react";
import { Collapse } from "react-collapse";
import Pusher from "pusher-js";

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

const PusherApp = props => {
  let pusher = new Pusher("b84802dc42f39193db3a", {
    cluster: "us3",
    forceTLS: true
  });

  let channel = pusher.subscribe("my-channel");
  channel.bind("my-event", function(data) {
    setPusherUpdate(data);
    console.log(data);
  });

  const [hider, setHider] = useState(false);
  const [pusherUpdate, setPusherUpdate] = useState("");

  const hideTable = () => {
    setHider(!hider);
  };

  return (
    <div>
      {hider ? (
        <button className="page-button" onClick={hideTable}>
          Hide PusherApp
        </button>
      ) : (
        <button className="page-button" onClick={hideTable}>
          Show PusherApp
        </button>
      )}
      <Collapse isOpened={hider}>
        {pusherUpdate && <h1>{JSON.stringify(pusherUpdate)}</h1>}
      </Collapse>
    </div>
  );
};

export default PusherApp;
