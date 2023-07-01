// import React, { useState, useEffect } from "react";
// import "../assets/css/pdftopdfa.css";
// function pdftopdfa() {
//   const [convertedData, setConvertedData] = useState(null);

//   // Fetch the data from the Django API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const formData =new FormData();
//         const response = await fetch('http://127.0.0.1:8000/api/pdf-to-word/', {
//           method: 'POST',
//           body: formData, // Assuming you have a formData object with the PDF file
//         });
//         const data = await response.blob(); // Convert the response to a Blob object
//         setConvertedData(data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

// //   return (
// //     <div>
// //       {convertedData ? (
// //         <div>
// //           {/* Render the converted data */}
// //           <a href={URL.createObjectURL(convertedData)} download="converted.docx">
// //             Download Converted File
// //           </a>
// //         </div>
// //       ) : (
// //         <div>Loading...</div>
// //       )}
// //     </div>
// //   );
// // };


// //   return (
// //     <html lang="en">
// //       <head>
// //         <meta charset="UTF-8" />
// //         <title>pdf_to_pdfa</title>
// //         <link rel="stylesheet" href="pdftopdfa.css" />
// //       </head>

// //       <body>
// //         <div id="body1">
// //           <img src="assets/images/icons/mainlogo.png" id="logo" />
// //           <div className="top">
// //             <img src="assets/images/icons/profile.png" id="profilepic" />
// //           </div>

// //           <div className="top">
// //             <p className="mainhead" style={{ fontFamily: 'monospace' }}>
// //               OCR
// //             </p>
// //           </div>

// //           <div className="top">
// //             <p className="mainhead" style={{ fontFamily: 'monospace' }}>
// //               TRANSLATION
// //             </p>
// //           </div>

// //           <div className="top">
// //             <p className="mainhead" style={{ fontFamily: 'monospace' }}>
// //               CONVERT WORD
// //             </p>
// //           </div>

// //           <div className="top">
// //             <p className="mainhead" style={{ fontFamily: 'monospace' }}>
// //               CONVERT PDF
// //             </p>
// //           </div>
// //         </div>

// //         <div id="body2">
// //           <br />
// //           <br />
// //           <br />
// //           <img src="assets/images/icons/pdf to pdfa.png" id="pdftopdfa" className="center" />
// //           <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
// //             Convert your PDF file to PDF/A in seconds
// //           </h1>
// //           <input type="file" id="pdf-file" accept="application/pdf" style={{ display: 'none' }} />
// //           <center><button className="button" onClick={() => document.getElementById('pdf-file').click()}>+ Select a PDF file</button></center>
// //           <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
// //             Or drop your PDF file here
// //           </h2>
// //           <br></br>

// //           <center>
// //           <button className="button" onClick={PdfToWord}>
// //             Download PDFA
// //           </button>
// //         </center>
// //         </div>
// //       </body>
// //     </html>
// //   );

// // export default PdfToWord;
// }
// export default pdftopdfa;


// import React, { useState, useEffect } from 'react';
// import "../assets/css/pdftopdfa.css";
// function PdfToWord() {
//   const [convertedData, setConvertedData] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', /* your PDF file */);

//       const response = await fetch('http://127.0.0.1:8000/api/pdf-to-word/', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.blob();
//       setConvertedData(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   fetchData();
// }, []);

// return (
//   <div>
//     {convertedData ? (
//       <div>
//         <a href={URL.createObjectURL(convertedData)} download="converted.pdfa">
//           Download Converted File
//         </a>
//       </div>
//     ) : (
//    <html lang="en">
//      <head>
//        <meta charset="UTF-8" />
//       <title>pdf_to_pdfa</title>
//      <link rel="stylesheet" href="pdftopdfa.css" />
//     </head>

//  <body>
//        <div id="body1">
//          <img src="assets/images/icons/mainlogo.png" id="logo" />
//         <div className="top">
//           <img src="assets/images/icons/profile.png" id="profilepic" />
//        </div>

//         <div className="top">
//           <p className="mainhead" style={{ fontFamily: 'monospace' }}>
//           OCR
//           </p>
//          </div>

//       <div className="top">
//           <p className="mainhead" style={{ fontFamily: 'monospace' }}>
//             TRANSLATION
//         </p>
//         </div>

//        <div className="top">
//          <p className="mainhead" style={{ fontFamily: 'monospace' }}>
//             CONVERT WORD
//           </p>
//          </div>

//         <div className="top">
//          <p className="mainhead" style={{ fontFamily: 'monospace' }}>
//             CONVERT PDF
//           </p>
//         </div>
//        </div>

//       <div id="body2">
//          <br />
//         <br />
//         <br />
//          <img src="assets/images/icons/pdf to pdfa.png" id="pdftopdfa" className="center" />
//          <h1 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
//           Convert your PDF file to PDF/A in seconds
//          </h1>
//          <input type="file" id="pdf-file" accept="application/pdf" style={{ display: 'none' }} />
//         <center><button className="button" onClick={() => document.getElementById('pdf-file').click()}>+ Select a PDF file</button></center>
//        <h2 style={{ fontFamily: 'Helvetica, Sans-serif' }} className="center">
//            Or drop your PDF file here
//          </h2>
//          <br></br>

//          <center>
//        <button className="button" onClick={PdfToWord}>
//            Download PDFA
//          </button>
//       </center>
//        </div>
//      </body>
//   </html>
//     )}
//   //   </div>
//   // );
//   return (
//     <div>
//       <h1>PDF to PDF/A Converter</h1>
//       <form>
//         <input type="file" onChange={PdfToWord} />
//         <button type="submit" onClick={PdfToWord}>Convert</button>
//       </form>
//       {convertedData ? (
//         <div>
//           <h2>Download Converted File</h2>
//           <a href={URL.createObjectURL(convertedData)} download="converted.pdfa">
//             Download
//           </a>
//         </div>
//       ) : (
//         <div>No converted file available</div>
//       )}
//     </div>
//   );

// }

// export default PdfToWord;

import React, { useState, useEffect } from 'react';
import '../assets/css/pdftopdfa.css';

function PdfToWord() {
  const [convertedData, setConvertedData] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [showModal, setShowModal] = useState(false);


  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     convertToWord(formData);
  //   }
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop();
      if (extension.toLowerCase() === 'pdf') {
        const formData = new FormData();
        formData.append('file', file);
        setIsFileSelected(true);
        setSelectedFileName(file.name);
        convertToWord(formData);
      } else {
        event.target.value = null; // Reset file input
        //alert('Please select a PDF file.');
        setShowModal(true);

      }
    } else {
      setIsFileSelected(false);
      setSelectedFileName('');
    }
  };

  const convertToWord = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/pdf-to-word/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.blob();
      setConvertedData(data);

      setTimeout(() => {
        setIsDownloadVisible(true);
      }, 3000); // Delay of 3 seconds

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [isDownloadVisible, setIsDownloadVisible] = useState(false);

  useEffect(() => {
    setIsDownloadVisible(false); // Hide the download button initially
  }, []);

  const handleDownload = () => {
    if (convertedData) {
      const downloadLink = URL.createObjectURL(convertedData);
      const a = document.createElement('a');
      a.href = downloadLink;
      a.download = 'converted.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  
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
            <b> Convert your PDF file to word file in seconds </b>
          </h1>
          <br></br>

          <form >
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

          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <p>Please select a PDF file.</p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}

          <br></br>

          {/* {isFileSelected && (
        <center>
          <div>
            <button className="button" type="button" style={{ maxWidth: '300px' }}>
              Convert File
            </button>
          </div>
        </center>
      )} */}

          {convertedData ? (
            <center>
              <div>
                <a href={URL.createObjectURL(convertedData)} download="converted.docx">
                  <button className="button" onClick={handleDownload} style={{ maxWidth: '300px' }}>
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

export default PdfToWord;


