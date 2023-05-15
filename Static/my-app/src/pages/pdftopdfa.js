import React from "react";
import "../assets/css/pdftopdfa.css";
function pdftopdfa() {
  const handleDownload = () => {
    // TODO: Handle file download logic
  };
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>pdf_to_pdfa</title>
        <link rel="stylesheet" href="pdftopdfa.css" />
      </head>

      <body>
        <div id="body1">
          <img src="assets/images/icons/mainlogo.png" id="logo" />
          <div className="top">
            <img src="assets/images/icons/profile.png" id="profilepic" />
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>
              OCR
            </p>
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>
              TRANSLATION
            </p>
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>
              CONVERT WORD
            </p>
          </div>

          <div className="top">
            <p className="mainhead" style={{ fontFamily: 'monospace' }}>
              CONVERT PDF
            </p>
          </div>
        </div>

        <div id="body2">
          <br />
          <br />
          <br />
          <img src="assets/images/icons/pdf to pdfa.png" id="pdftopdfa" className="center" />
          <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            Convert your PDF file to PDF/A in seconds
          </h1>
          <input type="file" id="pdf-file" accept="application/pdf" style={{ display: 'none' }} />
          <center>
            <button className="button" onClick={() => document.getElementById('pdf-file').click()}>
              + Select a PDF file
            </button>
          </center>
          <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            Or drop your PDF file here
          </h2>
          <br></br>

          <center>
          <button className="button" onClick={handleDownload}>
            Download PDFA
          </button>
        </center>
        </div>
      </body>
    </html>
  );
}

export default pdftopdfa;
