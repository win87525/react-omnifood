import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/general.css';
import './css/style.css';
import './css/queries.css';
import Header from './header'
import Section from './section';
import Footer from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Section />
    <Footer />
  </React.StrictMode>
);
