import React from 'react';
import '../assets/css/ebookstopdf.css';

class ebookstopdf extends React.Component {
  
  render() {
    const handleDownload = () => {
      // TODO: Handle file download logic
    };
    return (
      <div>
      <div id="body1">
        <img src="assets/images/icons/mainlogo.png" id="logo" alt="Main Logo" />
        <div className="top">
          <img src="assets/images/icons/profile.png" id="profilepic" alt="Profile Picture" />
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
          src="assets/images/icons/ebooks to pdf.png"
          id="ebookstopdf"
          className="center"
        />
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
          Convert your eBooks file to PDF in seconds
        </h1>
        <input
          type="file"
          id="ebook-file"
          accept="application/epub+zip, application/pdf, application/vnd.ms-excel, application/msword"
          style={{ display: 'none' }}
        />
        <center>
          <button
            className="button"
            onClick={() => document.getElementById('ebook-file').click()}
          >
            + Select any ebook file
          </button>
        </center>
        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
          Or drop your ebook file here
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
}

export default ebookstopdf;
