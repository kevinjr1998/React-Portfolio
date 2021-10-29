import React from 'react';
import NavBar from './NavBar';


function HeaderComp({ currentPage, handlePageChange }) {
  return (
  <>
  <header style = {{ backgroundColor: "#291F1E"}}>
    <h1 className = "px-1 py-4" style = {{color: "white"}}> Kevin Ryner </h1>

    <NavBar currentPage = {currentPage} handlePageChange = {handlePageChange}/>


    </header>
    </>
  );
}

export default HeaderComp;
