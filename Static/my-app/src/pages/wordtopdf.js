// import React from 'react';
// import '../assets/css/wordtopdf.css';

import React, { useState, useEffect } from 'react';
import '../assets/css/pdftopdfa.css';

function WordToPdf() {
  const [convertedData, setConvertedData] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop();
      if (extension.toLowerCase() === 'docx') {
        const formData = new FormData();
        formData.append('file', file);
        setIsFileSelected(true);
        setSelectedFileName(file.name);
        convertToPDF(formData);
      } else {
        event.target.value = null; // Reset file input
        alert('Please select a Word document (.docx file).');
      }
    } else {
      setIsFileSelected(false);
      setSelectedFileName('');
    }
  };

  const convertToPDF = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/word2pdf/convert/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.blob();
      setConvertedData(data);
    } catch (error) {
      console.error('Error:', error);
    }
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
        {/* <h1>PDF to Word Converter</h1> */}
        <div id="body2">
          <br />
          <br />
          <br />
          <img src="assets/images/icons/pdf to word.png" id="pdftopdfa" className="center" />
          <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            <br></br>
            <b> Convert your Word file to Pdf file in seconds </b>
          </h1>
          <br></br>

          <form >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label htmlFor="pdf-file" className="button" style={{ maxWidth: '300px' }}>
                + Select a word File
                <input
                  type="file"
                  id="pdf-file"
                  className="file-input"
                  onChange={handleFileChange}
                  accept=".docx,.doc"
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

          {convertedData ? (
            <center>
              <div>
                <a href={URL.createObjectURL(convertedData)} download="converted.pdf">
                  <button className="button" style={{ maxWidth: '300px' }}>
                    Download
                  </button>
                </a>
              </div>
            </center>
          ) : (
            <div></div>
          )}

          {/* <form>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Convert</button>
      </form>
      {convertedData ? (
        <div>
          <a href={URL.createObjectURL(convertedData)} download="converted.docx">
            Download
          </a>
        </div>
      ) : (
        <div>No converted file available</div>
      )} */}
        </div>
      </body>
    </html>
  );
}

export default WordToPdf;

