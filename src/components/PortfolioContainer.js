import React, { useState } from 'react';
import HeaderComp from './Header';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Portfolio from './pages/Porfolio';
import FooterComp from './FooterComp'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'CV') {
      return <CV />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div>
      <HeaderComp currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <FooterComp />    
    </div>
    </>
  );
}
