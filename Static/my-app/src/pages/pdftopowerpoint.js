import React from 'react';
import '../assets/css/pdftopowerpoint.css';


function pdftopowerpoint() 
{

  const handleDownload = () => {
    // TODO: Handle file download logic
  };
return (
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>pdf_to_powerpoint</title>
<link rel="stylesheet" href="pdftopowerpoint.css" />
</head>
<body>
<div id="body1">
<img src="assets/images/icons/mainlogo.png" id="logo" />
<div className="top">
<img src="assets/images/icons/profile.png" id="profilepic" />
</div>

php
Copy code
      <div className="top">
        <p className="mainhead" style={{ fontFamily: "monospace" }}>
          OCR
        </p>
      </div>

      <div className="top">
        <p className="mainhead" style={{ fontFamily: "monospace" }}>
          TRANSLATION
        </p>
      </div>

      <div className="top">
        <p className="mainhead" style={{ fontFamily: "monospace" }}>
          CONVERT WORD
        </p>
      </div>

      <div className="top">
        <p className="mainhead" style={{ fontFamily: "monospace" }}>
          CONVERT PDF
        </p>
      </div>
    </div>

    <div id="body2">
      <br />
      <br />
      <br />
      <img
        src="assets/images/icons/pdf to powerpoint.png"
        id="pdftopowerpoint"
        className="center"
      />
      <h1
        style={{ fontFamily: "Helvetica, Sans-serif" }}
        className="center"
      >
        Convert your PDF file to power point in seconds
      </h1>
      <input
        type="file"
        id="pdf-file"
        accept="application/pdf"
        style={{ display: "none" }}
      />
      <center>
        <button
          className="button"
          onClick={() => document.getElementById("pdf-file").click()}
        >
          + Select a PDF file </button>
      </center>
      <h2
        style={{ fontFamily: "Helvetica, Sans-serif" }}
        className="center"
      >
        {" "}
        Or drop your PDF file here
      </h2>
      <br></br>

      <center>
          <button className="button" onClick={handleDownload}>
            Download PDF
          </button>
        </center>
    </div>
  </body>
</html>
);
}

export default pdftopowerpoint;









