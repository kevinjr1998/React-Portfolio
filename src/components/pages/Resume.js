import React from 'react';
import CV from "../CV/Kevin_Ryner_CV.pdf"

export default function Resume() {

  const frontEndTech = ["Bootstrap", "JavaScript", "HTML", "ReactJS", "Handlebars", "Responsive Design", "jQuery", "Tailwind" ]

  const backEndtech = ["Node.js", "MySQL, Sequelize", "MongoDB, Mongoose", "GraphQL", "Express", ]



  return (
    <div>
      <h3 className = "p-2 ">My Resume </h3>
      <a href={CV} className = "p-2 " download="Kevin_Ryner_CV.pdf"> <button className = "p-2 btn btn-primary text-center"> Click to Download My CV</button></a>

      <h3 className = "p-2 ">Front-End Proficiencies </h3>

      <ul >{
        frontEndTech.map((entry, index) => {
          return (
            <li key = {index}> {entry}</li>
          )
        })
        
        }
      </ul>

      <h3 className = "p-2 ">Back-End Proficiencies </h3>
      <ul>
        {
          backEndtech.map((entry, index) => {
            return (
              <li key = {index}> {entry}</li>
            )
          })
        }
      </ul>


    </div>
  );
}
