import React from 'react';
import "../assets/css/index.css";

function index() {
  return (
    <div className="lang-en-US home">
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
      <div className="main">
        <div className="home-title">
          <h1 className="title">PDF TOOLS</h1>
        </div>
        <div className="tools">
          <div className="tools__container">
            <div className="tools__item">
              <a href="wordtopdf.html" title="word_to_pdf">
                <img src="assets/images/icons/word to pdf.png" />
                <h3>Word to PDF</h3>
                <p>Make word files easy to read by converting them into PDF</p>
                <div className="tools__item__content" />
              </a>
            </div>
            <div className="tools__item">
              <a href="exceltopdf.html" title="excel_to_pdf">
                <img src="assets/images/icons/excel to pdf.png" />
                <h3>Excel to PDF</h3>
                <p>Make excel sheets easy to read by converting them into PDF</p>
                <div className="tools__item__content" />
              </a>
            </div>
            <div className="tools__item">
              <a href="powerpointtopdf.html" title="powerpoint_to_pdf">
                <img src="assets/images/icons/powerpoint to pdf.png" />
                <h3>Powerpoint to PDF</h3>
                <p>Make your PPT slides easy to view by converting them into PDF</p>
                <div className="tools__item__content" />
              </a>
            </div>
            <div className="tools__item">
              <a href="jpgtopdf.html" title="jpg_to_pdf">
                <img src="assets/images/icons/jpg to pdf.png" />
                <h3>JPG to PDF</h3>
                <p>Reformat a JPG, PNG, or other image to a PDF file in a few seconds</p>
                <div className="tools__item__content" />
              </a>
            </div>
            <div className="tools__item">
              <a href="openofficetopdf.html" title="openoffice_to_pdf">
                <img src="assets/images/icons/openoffice to pdf.png" />
                <h3>OpenOffice to PDF</h3>
                <p>Convert OpenOffice Writer, Calc, Impress, Draw and Math files to PDF online and free</p>
                <div className="tools__item__content" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
