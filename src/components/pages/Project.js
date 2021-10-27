import React from 'react';

export default function Project({portCards}) {

  const styles = {
    cardStyles: {
      width : '35rem',
      height: '30rem',
    }
  }

  return (
    <>
      <h2 className = "p-2 ">Portfolio page</h2> 
      <div className = 'd-flex flex-wrap'> 
      {portCards.map((cardData, index) => {
        return (
        <>
      <div key = {index} style = {styles.cardStyles}  className=" card bg-light d-inline-flex flex-column justify-content-center allign-self-center align-items-center border rounded m-3">
      <h1 className="display-4">{cardData.title}</h1>
      <img src={cardData.image} className="img-fluid img-thumbnail" alt="My-5-Star-Local"></img>
        <div className="d-inline-flex flex-column align-items-center">
         <a target= "_blank" rel='noreferrer' className="btn btn-primary m-2" href={cardData.repoLink}> Link to GitHub Repository </a>
         <a target= "_blank" rel='noreferrer' className="btn btn-primary m-2" href={cardData.appLink}> Link to Deployed Application</a>
      </div>
      </div>
      </>
        )
      })}
      </div>
      </>
  );
}
