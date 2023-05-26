import React, { useState } from "react";
import "../assets/css/pdftopowerpoint.css";

function Pdftopowerpoint() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [convertedData, setConvertedData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension === 'pdf') {
        setSelectedFileName(file.name);
        convertToPPT(file);
      } else {
        event.target.value = null; // Reset file input
        alert('Please select a PDF document (.pdf file).');
      }
    } else {
      setSelectedFileName('');
    }
  };

  const convertToPPT = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://127.0.0.1:8000/pdf2ppt/convert/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.blob();
      setConvertedData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDownload = () => {
    if (convertedData) {
      const downloadLink = URL.createObjectURL(convertedData);
      const a = document.createElement("a");
      a.href = downloadLink;
      a.download = "converted.pptx";
      a.click();
      URL.revokeObjectURL(downloadLink);
    }
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
           <b> Convert your PDF file to power point in seconds </b>
          </h1>

          <br></br>

          <form>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="pdf-file" className="button" style={{ maxWidth: '300px' }}>
              + Select a PDF File
              <input
                type="file"
                id="pdf-file"
                className="file-input"
                onChange={handleFileChange}
                accept="application/pdf"
                style={{ display: 'none' }}
              />
            </label>
            {selectedFileName && (
              <p style={{ margin: '8px 0', fontFamily: 'Helvetica, Sans-serif' }}>{selectedFileName}</p>
            )}
          </div>
          <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            {/* <b>Or drop your word file here</b> */}
          </h2>
        </form>

          <br></br>

          {convertedData && (
          <center>
            <div>
              <button className="button" onClick={handleDownload}>
                Download
              </button>
            </div>
          </center>
        )}
        </div>
      </body>
    </html>
  );
}

export default Pdftopowerpoint;









