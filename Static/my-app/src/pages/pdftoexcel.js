import React from "react";
import "../assets/css/pdftoexcel.css";


function pdftoexcel() {
  return (
    <div>
      <div id="body1">
        <img src="assets/images/icons/mainlogo.png" id="logo" alt="Main Logo" />
        <div className="top">
          <img src="assets/images/icons/profile.png" id="profilepic" alt="Profile Picture" />
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
        <img src="assets/images/icons/pdf to excel.png" id="pdftoexcel" alt="PDF to Excel" className="center" />
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">Convert your PDF into excel in seconds</h1>
        <input type="file" id="pdf-file" accept="application/pdf" style={{ display: 'none' }} />
        <center><button className="button" onClick={() => document.getElementById('pdf-file').click()}>+ Select any PDF file</button></center>
        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">Or drop your pdf file here</h2>
      </div>
    </div>
  );
}

export default pdftoexcel;
