import React from "react";
import "../assets/css/exceltopdf.css";

function exceltopdf() {
  return (
    <div id="body1">
      <img src="assets/images/icons/mainlogo.png" id="logo" />
      <div className="top">
        <img src="assets/images/icons/profile.png" id="profilepic" />
      </div>
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
      <div id="body2">
        <br />
        <br />
        <br />
        <img src="assets/images/icons/excel to pdf.png" id="exceltopdf" className="center" />
        <h1 style={{ fontFamily: "Helvetica, Sans-serif" }} className="center">
          Convert your excel file to PDF in seconds
        </h1>
        <input
          type="file"
          id="excel-file"
          accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          style={{ display: "none" }}
        />
        <center>
          <button
            className="button"
            onClick={() => document.getElementById("excel-file").click()}
          >
            + Select any ebook file
          </button>
        </center>
        <h2 style={{ fontFamily: "Helvetica, Sans-serif" }} className="center">
          Or drop your excel file here
        </h2>
      </div>
    </div>
  );
}

export default exceltopdf;
