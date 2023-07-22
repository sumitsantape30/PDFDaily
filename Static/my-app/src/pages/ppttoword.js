import React, { useState } from "react";
import "../assets/css/powerpointtopdf.css";

function PowerpointToWord() {
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [convertedData, setConvertedData] = useState(null);
  const [isConverted, setIsConverted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
   const [showModal, setShowModal] = useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split(".").pop();
      if (extension.toLowerCase() === "ppt" || extension.toLowerCase() === "pptx") {
        // const formData = new FormData();
        // formData.append('file', file);
        setIsFileSelected(true);
        setSelectedFileName(file.name);
        convertToWord(file);
      } else {
        event.target.value = null; // Reset file input
        alert("Please select a PowerPoint file.");
        setIsFileSelected(false);
        setSelectedFileName("");
        setIsConverted(false);
      }
    } else {
      setIsFileSelected(false);
      setSelectedFileName("");
      setIsConverted(false);
    }
  };

  const handleDownload = () => {
    // TODO: Handle file download logic
    if (convertedData) {
      const downloadLink = URL.createObjectURL(convertedData);
      const a = document.createElement("a");
      a.href = downloadLink;
      a.download = "converted.pdf";
      a.click();
      URL.revokeObjectURL(downloadLink);
    }
  };

  const convertToWord = async (file) => {
    try {
      // Create a new FormData and append the file
      const formData = new FormData();
      formData.append("file", file);

      // Make a POST request to the conversion endpoint
      const response = await fetch("http://127.0.0.1:8000/ppt2word/ppt-to-word/", {
        method: "POST",
        body: formData,
      });

      // Get the converted data
      const data = await response.blob();
      setConvertedData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleConvert = () => {
    // TODO: Handle PowerPoint to Word conversion logic
    setIsLoading(true);
    // Simulating conversion delay with setTimeout
    setTimeout(() => {
      setIsConverted(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>powerpoint_to_word</title>
        <link rel="stylesheet" href="powerpointtopdf.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-xxx"
          crossorigin="anonymous"
        />
      </head>
      <body>
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
          <img src="assets/images/icons/powerpoint to pdf.png" id="powerpointtopdf" className="center" />
          <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            <b>Convert your power point file to word in seconds</b>
          </h1>
          <br></br>
          <form>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label htmlFor="ppt-file" className="button" style={{ maxWidth: '300px' }}>
                + Select a PowerPoint File
                <input
                  type="file"
                  id="ppt-file"
                  className="file-input"
                  onChange={handleFileChange}
                  accept=".ppt, .pptx"
                  style={{ display: 'none' }}
                />
              </label>
              {selectedFileName && (
                <p style={{ margin: '8px 0', fontFamily: 'Helvetica, Sans-serif' }}>{selectedFileName}</p>
              )}
            </div>
          </form>

          {isFileSelected && !isConverted && !isLoading && (
            <center>
              <div>
                <button className="button" onClick={handleConvert} style={{ maxWidth: '300px' }}>
                  Convert File
                </button>
              </div>
            </center>
          )}

          {isLoading && (
            <center>
              <div>
                <i className="fas fa-spinner fa-spin"></i>
                <p style={{ marginTop: '8px', fontFamily: 'Helvetica, Sans-serif' }}>Converting...</p>
              </div>
            </center>
          )}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <p>Please select a PNG file.</p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}

          {convertedData ? (
            <center>
              <div>
                {/* <button className="button" onClick={handleDownload} style={{ maxWidth: '300px' }}> */}
                <a href={URL.createObjectURL(convertedData)} download="converted.docx">
                  <button className="button" style={{ maxWidth: '300px' }} onClick={handleDownload}>
                  Download Word File
                </button>
                </a>
              </div>
            </center>
            ) : (
            <div></div>
          )}
        </div>
      </body>
    </html>
  );
}

export default PowerpointToWord;