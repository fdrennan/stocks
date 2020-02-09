import React, { useState } from "react";
import { Collapse } from "react-collapse";

const Markdown = props => {
  const [hideHtml, updateHideHtml] = useState(false);
  const [hidePdf, updateHidePdf] = useState(false);

  const htmlHider = e => {
    updateHideHtml(!hideHtml);
  };

  const pdfHider = e => {
    updateHidePdf(!hidePdf);
  };

  return (
    <div>
      {hideHtml ? (
        <button className="page-button" onClick={htmlHider}>
          Hide HTML Markdown
        </button>
      ) : (
        <button className="page-button" onClick={htmlHider}>
          Show HTML Markdown
        </button>
      )}
      <Collapse isOpened={hideHtml}>
        <iframe
          className="markdown"
          src={props.htmlUrl}
          frameBorder="0"
          title="HTML Markdown"
        ></iframe>
      </Collapse>
      {hidePdf ? (
        <button className="page-button" onClick={pdfHider}>
          Hide PDF Markdown
        </button>
      ) : (
        <button className="page-button" onClick={pdfHider}>
          Show PDF Markdown
        </button>
      )}
      <Collapse isOpened={hidePdf}>
        <h3>PDF</h3>
        <iframe
          className="markdown"
          src="http://127.0.0.1:8000/pdf"
          frameBorder="0"
          title="PDF Markdown"
        ></iframe>
      </Collapse>
    </div>
  );
};

export default Markdown;
