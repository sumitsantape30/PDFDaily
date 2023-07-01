import React, {useState, useEffect} from "react";
import "../assets/css/jpgtopdf.css";


function Jpgtopdf() {
  const [convertedData, setConvertedData] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     convertTopdf(formData);
  //   }
  // };
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const extension = file.name.split('.').pop();
  //     if (extension.toLowerCase() === 'jpg') {
  //       const formData = new FormData();
  //       formData.append('file', file);
  //       setIsFileSelected(true);
  //       setSelectedFileName(file.name);
  //       convertTopdf(formData);
  //     } else {
  //       event.target.value = null; // Reset file input
  //       alert('Please select a jpg file.');
  //     }
  //   } else {
  //     setIsFileSelected(false);
  //     setSelectedFileName('');
  //   }
  // };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
  if (file) {
    const extension = file.name.split('.').pop().toLowerCase();
    if (extension === 'jpg') {
      setSelectedFileName(file.name);
      convertTopdf(file);
    } else {
      event.target.value = null; // Reset file input
      //alert('Please select a PowerPoint document (.jpg file).');
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

  const convertTopdf = async (jpg_file) => {
    const formData = new FormData();
    formData.append('jpg_file',jpg_file);
    try {
      const response = await fetch('http://127.0.0.1:8000/jpg2pdf/jpg-to-pdf/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.blob();
      setConvertedData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // const handleDownload = () => {
  //   if (convertedData) {
  //     const downloadLink = URL.createObjectURL(convertedData);
  //     const a = document.createElement('a');
  //     a.href = downloadLink;
  //     a.download = 'converted.pdf';
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }
  // };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>pdf to word</title>
        <link rel="stylesheet" href="pdftopdfa.css" />
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

      {/* <div id="body2">
        <br />
        <br />
        <br />
        <img src="assets/images/icons/jpg to pdf.png" id="jpgtopdf" className="center" />
        <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
        <b>Convert your jpg file to PDF in seconds</b></h1>
        <input type="file" id="jpeg-file" accept="image/jpeg" style={{ display: 'none' }} />
        
        <center><button className="button" onClick={() => document.getElementById('jpeg-file').click()}>+  Select a jpg file</button></center>
        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center"> Or drop your jpg file here</h2>
        <br></br>

        <center>
          <button className="button" onClick={handleDownload}>
            Download PDF
          </button>
        </center>

      </div> */}
      <div id="body2">
          <br />
          <br />
          <br />
          <img src="assets/images/icons/jpg to pdf.png" id="jpgtopdf" className="center" />
          <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
            <br></br>
            <b> Convert your JPG file to PDF in seconds </b>
          </h1>
          <br></br>

          <form >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label htmlFor="jpg-file" className="button" style={{ maxWidth: '300px' }}>
                + Select a JPG File
                <input
                  type="file"
                  id="jpg-file"
                  className="file-input"
                  onChange={handleFileChange}
                  accept=".jpg"
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

          {/* Modal */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <p>Please select a PowerPoint document (.jpg file).</p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}

          <br></br>

          {isFileSelected && (
        <center>
          <div>
            {/* <button className="button" type="button" style={{ maxWidth: '300px' }}>
             
            </button> */}
          </div>
        </center>
      )}

       {convertedData ? (
            <center>
              <div>
                <a href={URL.createObjectURL(convertedData)} download="converted.pdf">
                  <button className="button" style={{ maxWidth: '300px' }} onClick={handleDownload}>
                    Download

                  </button>
                </a>
              </div>
            </center>
          ) : (
            <div></div>
          )}

      {/* {convertedData ? (
                    <center>
                   <div>
                    <a href={URL.createObjectURL(convertedData)} download="converted.pdf">
                    <button className="button">
                     Download
                    </button>
                    </a>
                    </div>
                    </center>
                    ) : (
                   <div></div>
                  )}  */}

    </div>
      </body>
    </html>
  );
}

export default Jpgtopdf;
