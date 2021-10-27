import React, { useState } from 'react';
import HeaderComp from './Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Project from './pages/Project';
import FooterComp from './FooterComp'

import my5SLocal from './images/my5StarLocal.gif'
import techBlog from './images/techBlogGif.gif'
import weatherDash from './images/Weather_Dashboard.gif'
import budgetTracker from './images/Budget_Tracker.gif'
import noteTaker from './images/Note_Taker_Screenshot.png'


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



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Project  portCards = {portCards} />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <HeaderComp currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <FooterComp />    
    </div>
  );
}
