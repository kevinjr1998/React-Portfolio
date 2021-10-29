import React from 'react';
import headshot from '../images/headshot.jpg'

export default function About() {
  return (
    <div className = "px-3 d-flex flex-wrap">
      <h3 className= "py-2">About Page</h3>

      <div className = "d-inline-flex flex-wrap justify-content-start py-3">
      <img src={headshot} className="img-fluid border rounded d-inline-flex flex-wrap my-3"  style ={{height: 280, aspectRatio: 5/2,  backgroundColor: 'transparent'}} alt="Headshot"/>
      <p className = "d-flex flex-wrap">
        I am a junior full-stack web developer with a background in physics
        looking to leverage my problem solving skills. I am currently working 
        towards earning a certificate in full stack development from the University 
        Coding Bootcamp, hosted by University of Birmingham. I have knowledge and skills
        in both front end technologies such as ReactJS, HTML and Bootstrap, but also 
        several back end technologies, like Node.JS, MongoDB and MySQL.
      </p>
      </div>
    </div>
  );
}
