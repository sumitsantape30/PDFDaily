import React from 'react';

function LanguageTranslation() {
    const messages = []; // Add your messages data here

    return (
        <div>

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
      
            <div id="navstrip">
                <div className="navbox">
                    <div className="option">
                        <a href="/about">
                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <span>About</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1 col-lg-3 col-xl-3 col-sm-1 col-1"></div>
                <div className="col-md-10 col-lg-6 col-xl-6 col-sm-10 col-10">
                    <h1>Language Translation</h1>
                    <br /><br />
                    <form method="POST">
                        <div className="form-group">
                            <label htmlFor="text">Text</label>
                            <textarea name="text" className="form-control" id="text" autoFocus={true} required></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-xl-5 col-lg-5">
                                <label htmlFor="lang1">From</label>
                                <select className="form-control" id="lang1" name="lang1">
                                    <option value="ar">Arabic</option>
                                    <option value="bn">Bengali</option>
                                    <option value="en" selected>English</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="hi">Hindi</option>
                                    <option value="it">Italian</option>
                                    <option value="ja">Japanese</option>
                                    <option value="pt">Portuguese</option>
                                    <option value="ru">Russian</option>
                                    <option value="es">Spanish</option>
                                    <option value="ta">Tamil</option>
                                    <option value="te">Telugu</option>
                                </select>
                            </div>
                            <div className="form-group col-xl-5 col-lg-5">
                                <label htmlFor="lang2">to</label>
                                <select className="form-control" id="lang2" name="lang2">
                                    <option value="ar">Arabic</option>
                                    <option value="bn">Bengali</option>
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="hi" selected>Hindi</option>
                                    <option value="it">Italian</option>
                                    <option value="ja">Japanese</option>
                                    <option value="pt">Portuguese</option>
                                    <option value="ru">Russian</option>
                                    <option value="es">Spanish</option>
                                    <option value="ta">Tamil</option>
                                    <option value="te">Telugu</option>
                                </select>
                            </div>
                            <div className="col-xl-2 col-lg-2 butn">
                                <button type="submit" className="btn btn-dark">Translate</button>
                            </div>
                        </div>
                    </form>
                    <br />
                    {messages && (
            <div>
              <center>
                <div className="alert alert-light" style={{ maxWidth: '500px' }}>
                  {messages.map((message, index) => (
                    <p key={index} align="center">{message}</p>
                  ))}
                </div>
              </center>
              <div className="col-md-1 col-lg-3 col-xl-3 col-sm-1 col-1"></div>
            </div>
          )}
        </div>
        <div className="col-md-1 col-lg-3 col-xl-3 col-sm-1 col-1"></div>
      </div>
    </div>
  );
}

export default LanguageTranslation; 

/*
import React from 'react';
import styles from "../assets/css/mobile.module.css";

function LanguageTranslation() {
  const messages = []; // Add your messages data here

  return (
    <div>
      <div id={styles.navstrip}>
        <div className={styles.navbox}>
          <div className={styles.option}>
            <a href="/about">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              <span>About</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.row} row`}>
        <div className={`${styles.colMd1} col-md-1 ${styles.colLg3} col-lg-3 ${styles.colXl3} col-xl-3 ${styles.colSm1} col-sm-1 col-1`}></div>
        <div className={`${styles.colMd10} col-md-10 ${styles.colLg6} col-lg-6 ${styles.colXl6} col-xl-6 ${styles.colSm10} col-sm-10 col-10`}>
          <h1>Language Translation</h1>
          <br /><br />
          <form method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="text">Text</label>
              <textarea name="text" className={`${styles.formControl} form-control`} id="text" autoFocus={true} required></textarea>
            </div>
            <div className={`${styles.row} row`}>
              <div className={`${styles.formGroup} ${styles.colXl5} ${styles.colLg5} col-xl-5 col-lg-5`}>
                <label htmlFor="lang1">From</label>
                <select className={`${styles.formControl} form-control`} id="lang1" name="lang1">
                </select>
              </div>
              <div className={`${styles.formGroup} ${styles.colXl5} ${styles.colLg5} col-xl-5 col-lg-5`}>
                <label htmlFor="lang2">To</label>
                <select className={`${styles.formControl} form-control`} id="lang2" name="lang2">
                </select>
              </div>
              <div className={`${styles.colXl2} ${styles.colLg2} col-xl-2 col-lg-2 ${styles.butn}`}>
                <button type="submit" className={`${styles.btn} btn btn-dark`}>Translate</button>
              </div>
            </div>
          </form>
          <br />
          {messages && (
            <div>
              <center>
                <div className={`${styles.alert} ${styles.alertLight} alert alert-light`} style={{ maxWidth: '500px' }}>
                  {messages.map((message, index) => (
                    <p key={index} align="center">{message}</p>
                  ))}
                </div>
              </center>
              <div className={`${styles.colMd1} col-md-1 ${styles.colLg3} col-lg-3 ${styles.colXl3} col-xl-3 ${styles.colSm1} col-sm-1 col-1`}></div>
            </div>
          )}
        </div>
        <div className={`${styles.colMd1} col-md-1 ${styles.colLg3} col-lg-3 ${styles.colXl3} col-xl-3 ${styles.colSm1} col-sm-1 col-1`}></div>
      </div>
    </div>
  );
}

export default LanguageTranslation; */