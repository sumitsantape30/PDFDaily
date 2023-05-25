import React, { useState } from 'react';
import '../assets/css/pdftojpg.css';

function PngToJpg() {
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [convertedData, setConvertedData] = useState(null);
  const [showDownloadButton, setShowDownloadButton] = useState(false);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop();
      if (extension.toLowerCase() === 'png') {
        setIsFileSelected(true);
        setSelectedFileName(file.name);
        convertPngToJpg(file);
      } else {
        event.target.value = null; // Reset file input
        alert('Please select a PNG file.');
        setIsFileSelected(false);
        setSelectedFileName('');
      }
    } else {
      setIsFileSelected(false);
      setSelectedFileName('');
    }
  };

  const convertPngToJpg = async(formData) => {
    // Perform the PNG to JPG conversion logic here
    // Assume the converted JPG data is stored in a variable named convertedData
    try {
      const response = await fetch('http://127.0.0.1:8000/api/pdf-to-word/', {
        method: 'POST',
        body: formData,
      });
    // const convertedData = /* Perform the conversion */
    // setConvertedData(convertedData);
    const data = await response.blob();
    setConvertedData(data);


    setTimeout(() => {
      setShowDownloadButton(true);
    }, 3000);
  } catch (error) {
    console.error('Error:', error);
  }
  };

  const handleDownload = () => {
    if (convertedData) {
      const downloadLink = URL.createObjectURL(convertedData);
      const a = document.createElement('a');
      a.href = downloadLink;
      a.download = 'converted.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
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
        <img src="assets/images/icons/pdf to jpg.png" id="pdftojpg" className="center" />
        <b>
          <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            <br />Convert your PNG file to JPG in seconds
          </h1>
        </b>
        <br></br>
        <form>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="png-file" className="button" style={{ maxWidth: '300px' }}>
              + Select a PNG File
              <input
                type="file"
                id="png-file"
                className="file-input"
                onChange={handleFileChange}
                accept="image/png"
                style={{ display: 'none' }}
              />
            </label>
            {selectedFileName && (
              <p style={{ margin: '8px 0', fontFamily: 'Helvetica, Sans-serif' }}>{selectedFileName}</p>
            )}
          </div>
        </form>
        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center"></h2>
        <br />

        {/* {isFileSelected && (
          <center>
            <div>
              <button className="button" onClick={handleDownload} style={{ maxWidth: '300px' }}>
                Convert File
              </button>
            </div>
          </center>
        )} */}

        {showDownloadButton  ? (
          <center>
            <div>
              
              <button className="button" onClick={handleDownload}>
                Download
              </button>
            </div>
          </center>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default PngToJpg;