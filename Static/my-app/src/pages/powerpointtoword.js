import React, { useState } from "react";
import "../assets/css/mergepdf.css";


function PowerPointToWord() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [convertedData, setConvertedData] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
  if (file) {
    const extension = file.name.split('.').pop().toLowerCase();
    if (extension === 'ppt' || extension === 'pptx') {
      setSelectedFileName(file.name);
      convertToWord(file);
    } else {
      event.target.value = null; // Reset file input
      alert('Please select a PowerPoint document (.ppt or .pptx file).');
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
      const response = await fetch("http://127.0.0.1:8000/ppt2pdf/ppt-to-pdf/", {
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


  return (
    <div>
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
        <img src="assets/images/icons/powerpoint to pdf.png" id="mergepdf" className="center" />
        {/* <img src="assets/images/icons/merge pdf.png" id="mergepdf" className="center" /> */}
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
          <b>Convert PowerPoint files into a pdf in seconds</b>
        </h1>
        <form>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="pdf-file" className="button" style={{ maxWidth: '300px' }}>
              + Select a PowerPoint File
              <input
                type="file"
                id="pdf-file"
                className="file-input"
                onChange={handleFileChange}
                accept=".ppt, .pptx, application/vnd.ms-powerpoint"
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
              <button className="button" onClick={handleDownload} style={{ maxWidth: '300px' }}>
                Download
              </button>
            </div>
          </center>
        )}

      </div>
    </div>
  );
}

export default PowerPointToWord;