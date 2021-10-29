import React from 'react';
import Project from "../Project"

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

  return (
    <>
    <h2 className = "p-2 ">Portfolio page</h2> 
    <Project portCards={portCards} />
  </>
  );
  
}
