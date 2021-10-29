import React from 'react';
import CVFile from "../CV/Kevin_Ryner_CV.pdf"

export default function CV() {

  const frontEndTech = ["Bootstrap", "JavaScript", "HTML","CSS",  "ReactJS", "Handlebars", "Responsive Design", "jQuery", "Tailwind" ]

  const backEndtech = ["Node.js", "MySQL, Sequelize", "MongoDB, Mongoose", "GraphQL", "Express", ]



  return (
    <div style = {{ backgroundColor: "#6CD9FC"}} className = "px-3">
      <h3 className = "p-2 ">My CV </h3>
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
