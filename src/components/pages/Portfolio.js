import React from 'react';
import my5SLocal from '../images/my5StarLocal.gif'
import techBlog from '../images/techBlogGif.gif'
import weatherDash from '../images/Weather_Dashboard.gif'
import budgetTracker from '../images/Budget_Tracker.gif'
import noteTaker from '../images/Note_Taker_Screenshot.png'

export default function Portfolio() {

  const portCards = [{
    title: 'My 5STAR Local',
    image: my5SLocal,
    appLink: 'https://vast-journey-10843.herokuapp.com/',
    repoLink: 'https://github.com/kevinjr1998/My-5-Star-Local' ,
  },
  {
    title: 'Tech Blog',
    image: techBlog,
    appLink: 'https://peaceful-basin-57768.herokuapp.com/',
    repoLink: 'https://github.com/kevinjr1998/Tech_Blog' ,
  },
  {
    title: 'Weather Dashboard',
    image: weatherDash,
    appLink: 'https://kevinjr1998.github.io/Weather_Dashboard/',
    repoLink: 'https://github.com/kevinjr1998/Weather_Dashboard' ,
  },
  {
    title: 'Budget Tracker',
    image: budgetTracker,
    appLink: 'https://pacific-lowlands-14349.herokuapp.com/',
    repoLink: 'https://github.com/kevinjr1998/Budget_Tracker' ,
  },
  {
    title: 'Note Taker',
    image: noteTaker,
    appLink: 'https://stark-headland-34041.herokuapp.com/',
    repoLink: 'https://github.com/kevinjr1998/Note_Taker' ,
  },
];

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
      <div style = {styles.cardStyles} key = {index} className=" card bg-light d-inline-flex flex-column justify-content-center allign-self-center align-items-center border rounded m-3">
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
