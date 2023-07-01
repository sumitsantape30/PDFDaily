import './App.css';
import Ebookstopdf from './pages/ebookstopdf';
import Exceltopdf from './pages/exceltopdf';
import Pdftopowerpoint from './pages/pdftopowerpoint';
import Wordtopdf from './pages/wordtopdf';
import Powerpointtoword from './pages/powerpointtoword';
import Jpgtopdf from './pages/jpgtopdf';
import Openofficetopdf from './pages/openofficetopdf';
import Pdftoexcel from './pages/pdftoexcel';
import Pngtojpg from './pages/pngtojpg';
import Pdftopng from './pages/pdftopng';
import Ppttoword from './pages/ppttoword';
import Pdftoword from './pages/pdftoword';
import Index from './pages/index';
import LanguageTranslation from './pages/LanguageTranslation';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';

function App() {

  useEffect(() => {
    document.title = 'PDF Daily'; // Replace 'My App' with your desired title
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <link rel="icon" type="image/png" href={process.env.PUBLIC_URL + '/assets/images/icons/favicon.png'} />
      </Helmet>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="Wordtopdf" element={<Wordtopdf />} />
        <Route path="Exceltopdf" element={<Exceltopdf />} />
        <Route path="Powerpointtoword" element={<Powerpointtoword />} />
        <Route path="Ebookstopdf" element={<Ebookstopdf />} />
        <Route path="Jpgtopdf" element={<Jpgtopdf />} />
        <Route path="Ppttoword" element={<Ppttoword />} />
        <Route path="Openofficetopdf" element={<Openofficetopdf />} />
        <Route path="Pdftoexcel" element={<Pdftoexcel />} />
        <Route path="Pngtojpg" element={<Pngtojpg />} />
        <Route path="Pdftoword" element={<Pdftoword />} />
        <Route path="Pdftopng" element={<Pdftopng />} />
        <Route path="Pdftopowerpoint" element={<Pdftopowerpoint />} />
        <Route path="LanguageTranslation" element={<LanguageTranslation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
