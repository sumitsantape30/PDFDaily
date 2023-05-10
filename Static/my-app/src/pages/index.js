import React from 'react';
import { Link } from 'react-router-dom';
//import "..assets/css/index.module.css";
import styles from '../assets/css/index.module.css';



function index() {
    return (
        <div className="lang-en-US home">
            <div id="body1">
                <img src="assets/images/icons/mainlogo.png" id="logo" alt="Logo" />
                <div className="top">
                    <img src="assets/images/icons/profile.png" id="profilepic" alt="Profile" />
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
                              <Link to={"wordtopdf"}> <img src="assets/images/icons/word to pdf.png" alt="Word to PDF" />
                                <h3>Word to PDF</h3>
                                <p>Make word files easy to read by converting them into PDF</p> 
                              </Link>
                                <div className="tools__item__content"></div>
                            </a>
                        </div>

                        <div className="tools__item">
                            <a href="exceltopdf.html" title="excel_to_pdf">
                              <Link to={"exceltopdf"}>  <img src="assets/images/icons/excel to pdf.png" alt="Excel to PDF" />
                                <h3>Excel to PDF</h3>
                                <p>Make excel sheets easy to read by converting them into PDF</p>
                              </Link>
                                <div className="tools__item__content"></div>
                            </a>
                        </div>

                        <div className="tools__item">
                            <a href="powerpointtopdf.html" title="powerpoint_to_pdf">
                               <Link to={"powerpointtopdf"}> <img src="assets/images/icons/powerpoint to pdf.png" alt="PowerPoint to PDF" />
                                <h3>Powerpoint to PDF</h3>
                                <p>Make your PPT slides easy to view by converting them into PDF</p>
                                </Link>
                                <div className="tools__item__content"></div>
                            </a>
                        </div>

                        <div className="tools__item">
                            <a href="jpgtopdf.html" title="jpg_to_pdf">
                                <Link to={"jpgtopdf"}><img src="assets/images/icons/jpg to pdf.png" alt="JPG to PDF" />
                                <h3>JPG to PDF</h3>
                                <p>Reformat a JPG, PNG, or other image to a PDF file in a few seconds</p>
                                </Link>
                                <div className="tools__item__content"></div>
                            </a>
                        </div>

                        <div className="tools__item">
                            <a href="openofficetopdf.html" title="openoffice_to_pdf">
                            <Link to={"openofficetopdf"}> <img src="assets/images/icons/openoffice to pdf.png" />
                                <h3>OpenOffice to PDF</h3>
                                <p>
                                    Convert OpenOffice Writer, Calc, Impress, Draw and Math files to PDF
                                    online <br /> and free
                                </p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="ebookstopdf.html" title="ebooks_to_pdf">
                            <Link to={"ebookstopdf"}> <img src="assets/images/icons/ebooks to pdf.png" />
                                <h3>eBooks to PDF</h3>
                                <p>
                                    Convert various eBooks <br /> files like MOBI and <br /> EPUB to PDF
                                </p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="iworktopdf.html" title="iwork_to_pdf">
                            <Link to={"iworktopdf"}> <img src="assets/images/icons/iwork to pdf.png" />
                                <h3>iWork to PDF</h3>
                                <p>Turn your iWork Pages, Numbers, or Keynote document into a PDF in seconds</p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>

                        <div className="tools__item">
                            <a href="pdftoexcel.html" title="pdf_to_excel">
                            <Link to={"pdftoexcel"}> <img src="assets/images/icons/excel to pdf.png" />
                                <h3>PDF to Excel</h3>
                                <p>Extract the data from <br /> PDFs directly into excel sheets</p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="pdftopowerpoint.html" title="pdf_to_powerpoint">
                            <Link to={"pdftopowerpoint"}> <img src="assets/images/icons/pdf to powerpoint.png" />
                                <h3>PDF to Powerpoint</h3>
                                <p>Make PPTs from PDFs in <br /> the easiest way</p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="pdftojpg.html" title="pdf_to_jpg">
                            <Link to={"pdftojpg"}> <img src="assets/images/icons/pdf to jpg.png" />
                                <h3>PDF to JPG</h3>
                                <p>Convert PDF images <br /> directly into jpg format</p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="pdftopng.html" title="pdf_to_png">
                            <Link to={"pdftopng"}> <img src="assets/images/icons/pdf to png.png" />
                                <h3>PDF to PNG</h3>
                                <p>Convert PDF images <br /> directly into png format</p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="mergepdf.html" title="merge_pdf">
                            <Link to={"mergepdf"}>  <img src="assets/images/icons/merge pdf.png" alt="merge pdf" />
                                <h3>Merge PDF</h3>
                                <p>Merge multiple PDFs into <br /> a single PDF</p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="pdftopdfa.html" title="pdf_to_pdfa">
                            <Link to={"pdftopdfa"}>  <img src="assets/images/icons/pdf to pdfa.png" alt="pdf to pdfa" />
                                <h3>PDF to PDF/A</h3>
                                <p>Convert PDFs into PDF/A, ISO standardized version <br /> for archiving</p>
                                </Link>

                                <div className="tools__item__content"></div>
                            </a>
                        </div>
                        <div>
                            <br />
                            <center><h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Easily convert to and from PDFs in seconds</h1></center><br />
                            <input type="file" accept="application/pdf" id="pdf-file" style={{ display: 'none' }} />
                            <center><button className="button" onClick={() => document.getElementById('pdf-file').click()}>+ Choose file</button></center>
                        </div>
                        <br />
                        <br />
                        <div className="outer-container">
                            <div className="container-fluid">
                                <div className="heading text-center" style={{ fontWeight: 'bold' }}>
                                    <h1>How to convert to and from PDF free</h1>
                                </div>
                                <div className="boxes">
                                    <div className="box box1">
                                        <div className="number-div">
                                            <div className="number-circle ps-2">1</div>
                                        </div>
                                        <div className="para-div ms-3 pt-2">
                                            Select the Word, Excel, PowerPoint, PDF or other file you wish to convert.
                                        </div>
                                    </div>
                                    <div className="box box2">
                                        <div className="number-div">
                                            <div className="number-circle ps-2">2</div>
                                        </div>
                                        <div className="para-div ms-3 pt-2">
                                            Our free PDF creator will convert your document to PDF or from PDF in seconds.
                                        </div>
                                    </div>
                                    <div className="box box3">
                                        <div className="number-div">
                                            <div className="number-circle ps-2">3</div>
                                        </div>
                                        <div className="para-div ms-3">
                                            Your new document will be ready to download immediately. After the download is completed, any remaining files uploaded will be purged from our server.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading2 bg-white text-center pt-3 pb-2">
                        <h1 style={{ fontSize: 32, fontWeight: 'bold' }}>TRANSLATION</h1>
                    </div>
                    <div className="translate-outer-div mt-4">
                        <div className="translate-div">
                            <div className="translate english-div">
                                <div>
                                    <textarea
                                        className="textarea"
                                        name=""
                                        placeholder="Type something in English."
                                        id=""
                                        cols="35"
                                        rows="12"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="translate btn-div">
                                <div>
                                    <button className="translate-btn">Translate</button>
                                </div>
                            </div>
                            <div className="translate hindi-div">
                                <div>
                                    <textarea
                                        className="textarea"
                                        name=""
                                        placeholder="Get hindi translation."
                                        id=""
                                        cols="35"
                                        rows="12"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
