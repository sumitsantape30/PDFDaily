import React, { useState } from 'react';
import '../assets/css/pdftojpg.css';

function PngToJpg() {
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop();
      if (extension.toLowerCase() === 'png') {
        setIsFileSelected(true);
        setSelectedFileName(file.name);
        // TODO: Handle PNG to JPG conversion logic
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

        {isFileSelected && (
          <center>
            <div>
              <button className="button" onClick={handleDownload} style={{ maxWidth: '300px' }}>
                Convert File
              </button>
            </div>
          </center>
        )}

        {/* {convertedData ? (
          <center>
            <div>
              
              <button className="button" onClick={handleDownload}>
                Download
              </button>
            </div>
          </center>
        ) : (
          <div></div>
        )} */}
      </div>
    </div>
  );
}

export default PngToJpg;