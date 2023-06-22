import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import "../assets/css/index.css";


function Index() {
    const [loading, setLoading] = useState(false);

    const handleClick = (event, destination) => {
        event.preventDefault(); // Prevents the default link behavior

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window.open(destination, '_self');
        }, 3000);
    };

    const loaderOverride = css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    `;

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
                    <Link to={"LanguageTranslation"} onClick={(e) => handleClick(e, 'LanguageTranslation')}>
                        <p className="mainhead" style={{ fontFamily: 'monospace' }}>TRANSLATION</p>
                    </Link>
                    {loading && (
                        <div className="loader-overlay">
                            <div className="loader">
                                <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                            </div>
                        </div>
                    )}
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
                            <a title="word_to_pdf">
                                <Link to={"wordtopdf"} onClick={(e) => handleClick(e, 'wordtopdf')}> <img src="assets/images/icons/word to pdf.png" alt="Word to PDF" />
                                    <h3>Word to PDF</h3>
                                    {/* <p>Make word files easy to read by converting them into PDF</p>  */}
                                    <div className="tools__item__content"></div>
                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}
                            </a>
                        </div>

                        <div className="tools__item inactive-overlay">
                            <a title="excel_to_pdf">
                                <Link>  <img src="assets/images/icons/excel to pdf.png" alt="Excel to PDF" />
                                    <h3>Excel to PDF</h3>
                                    {/* <p>Make excel sheets easy to read by converting them into PDF</p> */}
                                    <div className="tools__item__content inactive-overlay"></div>

                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}
                            </a>
                        </div>

                        <div className="tools__item inactive-overlay">
                            <a title="powerpoint_to_word">
                                <Link > <img src="assets/images/icons/powerpoint to pdf.png" alt="PowerPoint to PDF" />
                                    <h3>Powerpoint to PDF</h3>
                                    {/* <p>Make your PPT slides easy to view by converting them into PDF</p> */}
                                    <div className="tools__item__content inactive-overlay"></div>

                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}
                            </a>
                        </div>

                        <div className="tools__item">
                            <a href="jpgtopdf.html" title="jpg_to_pdf">
                                <Link to={"jpgtopdf"} onClick={(e) => handleClick(e, 'jpgtopdf')}><img src="assets/images/icons/jpg to pdf.png" alt="JPG to PDF" />
                                    <h3>JPG to PDF</h3>
                                    {/* <p>Reformat a JPG, PNG, or other image to a PDF file in a few seconds</p> */}
                                    <div className="tools__item__content"></div>

                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}
                            </a>
                        </div>

                        <div className="tools__item inactive-overlay">
                            <a title="openoffice_to_pdf">
                                <Link>
                                    <div className="inactive-overlay"></div> {/* Transparent block */}
                                    <img src="assets/images/icons/openoffice to pdf.png" alt="OpenOffice to PDF" />
                                    <h3>OpenOffice to PDF</h3>
                                </Link>
                                {/* {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )} */}

                            </a>
                        </div>
                        <div className="tools__item inactive-overlay">
                            <a title="ebooks_to_pdf">
                                <Link> <img src="assets/images/icons/ebooks to pdf.png" />
                                    <h3>eBooks to PDF</h3>
                                    {/* <p>
                                    Convert various eBooks <br /> files like MOBI and <br /> EPUB to PDF
                                </p> */}
                                    <div className="inactive-overlay"></div>

                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}

                            </a>
                        </div>
                        <div className="tools__item inactive-overlay">
                            <a title="iwork_to_pdf">
                                <Link> <img src="assets/images/icons/iwork to pdf.png" />
                                    <h3>iWork to PDF</h3>
                                    {/* <p>Turn your iWork Pages, Numbers, or Keynote document into a PDF in seconds</p> */}
                                    <div className="tools__item__content inactive-overlay"></div>

                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}

                            </a>
                        </div>

                        <div className="tools__item inactive-overlay">
                            <a  title="pdf_to_excel">
                                <Link > <img src="assets/images/icons/excel to pdf.png" />
                                    <h3>PDF to Excel</h3>
                                    {/* <p>Extract the data from <br /> PDFs directly into excel sheets</p> */}
                                    <div className="tools__item__content inactive-overlay"></div>

                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}

                            </a>
                        </div>
                        <div className="tools__item inactive-overlay">
                            <a title="pdf_to_powerpoint">
                                <Link > <img src="assets/images/icons/pdf to powerpoint.png" />
                                    <h3>PDF to Powerpoint</h3>
                                    {/* <p>Make PPTs from PDFs in <br /> the easiest way</p> */}
                                    <div className="tools__item__content inactive-overlay"></div>

                                </Link>
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}

                            </a>
                        </div>
                        <div className="tools__item">
                            <a href="pngtojpg.html" title="PNG_to_JPG">
                                <Link to={"pngtojpg"} onClick={(e) => handleClick(e, 'pngtojpg')}> <img src="assets/images/icons/pdf to jpg.png" />
                                    <h3>PNG to JPG</h3>
                                    {/* <p>Convert PDF images <br /> directly into jpg format</p> */}
                                    <div className="tools__item__content"></div>

                                </Link>

                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}

                            </a>
                        </div>
                        <div className="tools__item inactive-overlay">
                            <a  title="pdf_to_png">
                                <Link > <img src="assets/images/icons/pdf to png.png" />
                                    <h3>PDF to PNG</h3>
                                    {/* <p>Convert PDF images <br /> directly into png format</p> */}
                                    <div className="tools__item__content inactive-overlay"></div>

                                </Link>

                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}

                            </a>
                        </div>
                        <div className="tools__item inactive-overlay">
                            <a  title="merge_pdf">
                                <Link >  <img src="assets/images/icons/merge pdf.png" alt="merge pdf" />
                                    <h3>PPT to Word</h3>
                                    {/* <p>Merge multiple PDFs into <br /> a single PDF</p> */}
                                    <div className="tools__item__content inactive-overlay"></div>

                                </Link>

                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}

                            </a>
                        </div>
                        <div className="tools__item">
                            <a>
                                <Link to={"Pdftoword"} onClick={(e) => handleClick(e, 'pdftoword')}>  <img src="assets/images/icons/pdf to word.png" alt="pdf to word" />
                                    <h3>PDF to word</h3>
                                    {/* <p>Convert PDF files into word <br /> </p> */}
                                    <div className="tools__item__content"></div>

                                </Link>

                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader">
                                            <BeatLoader color="#000" css={loaderOverride} loading={loading} />
                                        </div>
                                    </div>
                                )}
                            </a>
                        </div>
                        {/* <div>
                            <br />
                            <center><h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Easily convert to and from PDFs in seconds</h1></center><br />
                            <input type="file" accept="application/pdf" id="pdf-file" style={{ display: 'none' }} />
                            <center><button className="button" onClick={() => document.getElementById('pdf-file').click()}>+ Choose file</button></center>
                        </div> */}
                        <br />
                        <br />
                        <div className="outer-container">
                            <div className="container-fluid">
                                <div className="heading text-center" style={{ fontWeight: 'bold' }}>
                                    {/* <h1>How to convert to and from PDF free</h1> */}
                                </div>
                                <div className="boxes">
                                    <div className="box box1">
                                        <div className="number-div">
                                            <div className="number-circle ps-2">1</div>
                                        </div>
                                        <div className="para-div ms-3 pt-2">
                                            {/* Select the Word, Excel, PowerPoint, PDF or other file you wish to convert. */}
                                        </div>
                                    </div>
                                    <div className="box box2">
                                        <div className="number-div">
                                            <div className="number-circle ps-2">2</div>
                                        </div>
                                        <div className="para-div ms-3 pt-2">
                                            {/* Our free PDF creator will convert your document to PDF or from PDF in seconds. */}
                                        </div>
                                    </div>
                                    <div className="box box3">
                                        <div className="number-div">
                                            <div className="number-circle ps-2">3</div>
                                        </div>
                                        <div className="para-div ms-3">
                                            {/* Your new document will be ready to download immediately. After the download is completed, any remaining files uploaded will be purged from our server. */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Index;
