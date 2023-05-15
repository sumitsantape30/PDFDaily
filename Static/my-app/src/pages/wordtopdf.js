import React from 'react';
import '../assets/css/wordtopdf.css';

function wordtopdf() {
  const handleFileUpload = () => {
    // TODO: Handle file upload logic
  };

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
        <img
          src="assets/images/icons/word to pdf.png"
          id="wordtopdf"
          className="center"
        />
        <br></br>
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
          <b>Convert your word file to PDF in seconds </b>
        </h1> 
        <br></br>
        <input
          type="file"
          id="ppt-file"
          accept=".doc, .docx"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <center>
          <button
            className="button"
            onClick={() => document.getElementById('ppt-file').click()}
          >
            + Select a word file
          </button>
          
        </center>
        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
          <b>Or drop your word file here</b>
        </h2>
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
export default wordtopdf;
