import './App.css';
import Ebookstopdf from './pages/ebookstopdf';
import Exceltopdf from './pages/exceltopdf';
import Pdftopowerpoint from './pages/pdftopowerpoint';
import Wordtopdf from './pages/wordtopdf';
import Powerpointtopdf from './pages/powerpointtopdf';
import Jpgtopdf from './pages/jpgtopdf';
import Openofficetopdf from './pages/openofficetopdf';
import Pdftoexcel from './pages/pdftoexcel';
import Pdftojpg from './pages/pdftojpg';
import Pdftopng from './pages/pdftopng';
import Mergepdf from './pages/mergepdf';
import Pdftoword from './pages/pdftoword';
import Index from './pages/index';
import LanguageTranslation from './pages/LanguageTranslation';

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Index />} />
        <Route path= "Wordtopdf" element = {<Wordtopdf />} />
        <Route path= "Exceltopdf" element = {<Exceltopdf />} />
        <Route path= "Powerpointtopdf" element = {<Powerpointtopdf />} />
        <Route path= "Ebookstopdf" element = {<Ebookstopdf />} />
        <Route path= "Jpgtopdf" element = {<Jpgtopdf />} />
        <Route path= "Mergepdf" element = {<Mergepdf />} />
        <Route path= "Openofficetopdf" element = {<Openofficetopdf />} />
        <Route path= "Pdftoexcel" element = {<Pdftoexcel />} />
        <Route path= "Pdftojpg" element = {<Pdftojpg />} />
        <Route path= "Pdftoword" element = {<Pdftoword />} />
        <Route path= "Pdftopng" element = {<Pdftopng />} />
        <Route path= "Pdftopowerpoint" element = {<Pdftopowerpoint />} />
        <Route path= "LanguageTranslation" element = {<LanguageTranslation />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
