import React from 'react';
import '../assets/css/wordtopdf.css';

function wordtopdf() {
  const handleFileUpload = () => {
    // TODO: Handle file upload logic
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
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
          Convert your word file to PDF in seconds
        </h1>
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
          Or drop your word file here
        </h2>
      </div>
    </div>
  );
}
export default wordtopdf;
