import React from 'react';
import CVFile from "../CV/Kevin_Ryner_CV.pdf"

export default function CV() {

  const frontEndTech = ["React", "JavaScript", "HTML","CSS", "Handlebars", "Responsive Design","Bootstrap", "jQuery", "Tailwind" ]

  const backEndtech = ["Node.js", "MySQL, Sequelize", "MongoDB, Mongoose", "GraphQL", "Express", ]



  return (
    <div style = {{ backgroundColor: "#6CD9FC"}} className = "px-3">
      <h2 className = "p-2 ">My CV </h2>
      <a href={CVFile} className = "p-2 " download="Kevin_Ryner_CV.pdf"> <button className = "p-2 btn btn-primary text-center"> Click to Download My CV</button></a>

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
