import React from 'react';
import NavBar from './NavBar';


function HeaderComp({ currentPage, handlePageChange }) {
  return (
  <>
  <header>
    <h1 className = "px-1 py-4"> Kevinjr1998 </h1>

    <NavBar currentPage = {currentPage} handlePageChange = {handlePageChange}/>


    </header>
    </>
  );
}

export default HeaderComp;
