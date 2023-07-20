import React, { useState } from "react";
import '../assets/css/ebookstopdf.css';

function CompressPDF() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [convertedData, setConvertedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension === 'pdf') {
        setSelectedFileName(file.name);
        compressPdf(file); // Call the compressPdf function when a PDF file is selected
      } else {
        event.target.value = null; // Reset file input
        setShowModal(true);
      }
    } else {
      setSelectedFileName('');
    }
  };

  const handleDownload = () => {
    if (convertedData) {
      const downloadLink = URL.createObjectURL(convertedData);
      const a = document.createElement("a");
      a.href = downloadLink;
      a.download = "compressed.pdf";
      a.click();
      URL.revokeObjectURL(downloadLink);
    }
  };

  const compressPdf = async (file) => {
    try {
      const fileContent = await file.arrayBuffer();
      // Implement the PDF compression logic using a library or algorithm of your choice
      // For example, you can use a library like pdf-lib or pdf.js to compress the PDF.
      // Please note that the specific implementation will depend on the library you choose.

      // Once the compression is done, set the compressed PDF data using setConvertedData:
      setConvertedData(/* Compressed PDF data */);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <html>
      <head>
        <style>
        {`
            .modal {
              display: ${showModal ? 'block' : 'none'};
              position: fixed;
              z-index: 1;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgba(0, 0, 0, 0.4);
              animation: fadeIn 0.3s ease-in-out;
            }
            
            .modal-content {
              background-color: #fefefe;
              margin: 15% auto;
              padding: 20px;
              border: 1px solid #888;
              width: 300px;
              text-align: center;
              animation: slideIn 0.3s ease-in-out;
            }
            
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            
            @keyframes slideIn {
              from {
                transform: translateY(-20%);
              }
              to {
                transform: translateY(0);
              }
            }
          `}
        </style>
      </head>
    <body>
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
        <br></br>
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
         <b> Compress your PDF file in seconds</b>
        </h1>
        <br></br>

        <form>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="html-file" className="button" style={{ maxWidth: '300px' }}>
              + Select an PDF File
              <input
                type="file"
                id="html-file"
                className="file-input"
                onChange={handleFileChange}
                accept=".html"
                style={{ display: 'none' }}
              />
            </label>
            {selectedFileName && (
              <p style={{ margin: '8px 0', fontFamily: 'Helvetica, Sans-serif' }}>{selectedFileName}</p>
            )}
          </div>
          <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            {/* <b>Or drop your HTML file here</b> */}
          </h2>
        </form>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <p>Please select an HTML document (.html file).</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
        {convertedData && (
          <center>
            <div>
              <button className="button" onClick={handleDownload} style={{ maxWidth: '300px' }}>
                Download PDF
              </button>
            </div>
          </center>
        )}

      </div>
    </div>
    </body>
    </html>

  );
}

export default CompressPDF;
