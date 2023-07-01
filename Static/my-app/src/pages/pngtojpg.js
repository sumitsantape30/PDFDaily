import React, { useState } from 'react';
import '../assets/css/pdftojpg.css';

function PngToJpg() {
  // const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [convertedData, setConvertedData] = useState(null);
  // const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
  if (file) {
    const extension = file.name.split('.').pop().toLowerCase();
    if (extension === 'png') {
      setSelectedFileName(file.name);
      convertPngToJpg(file);
    } else {
      event.target.value = null; // Reset file input
     // alert('Please select a PowerPoint document (.png file).');
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
      a.download = "converted.jpg";
      a.click();
      URL.revokeObjectURL(downloadLink);
    }
  };

  const convertPngToJpg = async(png_file) => {
    // Perform the PNG to JPG conversion logic here
    // Assume the converted JPG data is stored in a variable named convertedData
    const formData = new FormData();
    formData.append('png_file',png_file);
    try {
      const response = await fetch('http://127.0.0.1:8000/png2jpg/png-to-jpg/', {
        method: 'POST',
        body: formData,
      });
    // const convertedData = /* Perform the conversion */
    // setConvertedData(convertedData);
    const data = await response.blob();
    setConvertedData(data);

    // setTimeout(() => {
    //   setShowDownloadButton(true);
    // }, 3000);
  } catch (error) {
    console.error('Error:', error);
  }
  };
  
  return (

    <html>

      <head>

      <title>png_to_jpg</title>

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
                accept=".png"
                style={{ display: 'none' }}
              />
            </label>
            {selectedFileName && (
              <p style={{ margin: '8px 0', fontFamily: 'Helvetica, Sans-serif' }}>{selectedFileName}</p>
            )}
          </div>
        </form>

        {/* Modal */}
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

        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center"></h2>
        <br />

       
          {convertedData ? (
            <center>
              <div>
                <a href={URL.createObjectURL(convertedData)} download="converted.jpg">
                  <button className="button" style={{ maxWidth: '300px' }} onClick={handleDownload}>
                    Download

                  </button>
                </a>
              </div>
            </center>
          ) : (
            <div></div>
          )}

      </div>
    </div>
    </body>
    </html>
  );
}

export default PngToJpg;