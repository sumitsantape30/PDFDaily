import React from "react";
import "../assets/css/jpgtopdf.css";


function jpgtopdf() {
  const handleDownload = () => {
    // TODO: Handle file download logic
  };
  return (
    <div>
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
        <img src="assets/images/icons/jpg to pdf.png" id="jpgtopdf" className="center" />
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">Convert your jpg file to PDF in seconds</h1>
        <input type="file" id="jpeg-file" accept="image/jpeg" style={{ display: 'none' }} />
        <center><button className="button" onClick={() => document.getElementById('jpeg-file').click()}>+  Select a jpg file</button></center>
        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center"> Or drop your jpg file here</h2>
        <br></br>

        <center>
          <button className="button" onClick={handleDownload}>
            Download PDF
          </button>
        </center>
      </div>
    </div>
  );
}

export default jpgtopdf;
