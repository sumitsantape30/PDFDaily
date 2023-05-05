import React from "react";
import "../assets/css/openofficetopdf.css";


function openofficetopdf() {
  return (
    <div>
      <div id="body1">
        <img src="assets/images/icons/mainlogo.png" id="logo" alt="logo" />
        <div className="top">
          <img src="assets/images/icons/profile.png" id="profilepic" alt="profile" />
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
        <img src="assets/images/icons/openoffice to pdf.png" id="openofficetopdf" alt="openofficetopdf" className="center" />
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">Convert your open office file to PDF in seconds</h1>
        <input type="file" id="openOffice-file" accept="application/vnd.oasis.opendocument.*" style={{ display: 'none' }} />
        <center>
          <button className="button" onClick={() => document.getElementById('openOffice-file').click()}>+  Select any open office file</button>
        </center>
        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center"> Or drop your open office file here</h2>
      </div>
    </div>
  );
}

export default openofficetopdf;
