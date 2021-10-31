import {React} from "react";

import gitHubLogo from "./images/GitHubLogo.png"
import linkedInLogo from "./images/LinkedInLogo.png"
import stackOverflowLogo from "./images/stackOverflowLogo.png"


export default function FooterComp() {

    return (
        <>
          <footer style = {{backgroundColor: "#291F1E", color: "white"}} className="d-flex flex-wrap justify-content-center align-content-center border rounded w-100 py-2">
            <div className = "d-flex p-1">
            <h3 className="px-2"> GitHub:  </h3>
            <a href = "https://github.com/kevinjr1998" target="_blank" rel = "noreferrer"  className = "smLink rounded d-flex" ><img src={gitHubLogo} className="img-fluid rounded" alt="GitHub Logo" style ={{width: 60, aspectRatio: 3/2,  backgroundColor: 'transparent' }}></img></a>
            </div>

            <div className = " d-flex p-1 ">
            <h3 className="px-2"> LinkedIn:  </h3>
            <a href = "https://www.linkedin.com/in/kevin-ryner/" target="_blank" rel = "noreferrer" className = "smLink rounded d-flex" ><img src={linkedInLogo} className="img-fluid rounded smLink" alt="LinkedIn Logo" style ={{width: 40, aspectRatio: 3/2,  backgroundColor: 'transparent'}}></img></a>
            </div>

            <div className = "d-flex p-1 mx-2 w-30">
            <h3 className="px-2"> StackOverflow:  </h3>
            <a href = "https://stackoverflow.com/users/15321370/" target="_blank" rel = "noreferrer" className = "smLink rounded d-flex" ><img src={stackOverflowLogo} className="img-fluid rounded smLink" alt="StackOverflow Logo" style ={{width: 70, aspectRatio: 3/2,  backgroundColor: 'transparent'}}></img></a>
            </div>
            </footer>
        </>
    )
}