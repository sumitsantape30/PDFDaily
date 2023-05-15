import React from "react";
import "../assets/css/powerpointtopdf.css";


function powerpointtopdf() {

  const handleDownload = () => {
    // TODO: Handle file download logic
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>powerpoint_to_pdf</title>
        <link rel="stylesheet" href="powerpointtopdf.css" />
      </head>
      <body>
        <div id="body1">
          <img src="assets/images/icons/mainlogo.png" id="logo" />
          <div className="top">
            <img src="assets/images/icons/profile.png" id="profilepic" />
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>OCR</p>
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>TRANSLATION</p>
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>CONVERT WORD</p>
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>CONVERT PDF</p>
          </div>
        </div>

        <div id="body2">
          <br />
          <br />
          <br />
          <img src="assets/images/icons/powerpoint to pdf.png" id="powerpointtopdf" className="center" />
          <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            <b>Convert your power point file to PDF in seconds</b>
          </h1>
          <br></br>
          <input
            type="file"
            id="ppt-file"
            accept="application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation"
            style={{ display: 'none' }}
          />
          <center>
            <button className="button" onClick={() => document.getElementById('ppt-file').click()}>
              + Select a power point file
            </button>
          </center>

          <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            <b>Or drop your power point file here</b>
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

export default powerpointtopdf;
