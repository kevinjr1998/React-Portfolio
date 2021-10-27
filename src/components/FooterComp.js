import {React} from "react";

import gitHubLogo from "./images/GitHubLogo.png"
import linkedInLogo from "./images/LinkedInLogo.png"


export default function FooterComp() {

    return (
        <>
          <footer className="d-flex justify-content-center align-content-center border rounded p">
            <h3 className="px-2"> GitHub:  </h3>
            <a href = "https://github.com/kevinjr1998" target="_blank" rel = "noreferrer"   ><img src={gitHubLogo} className="img-fluid rounded " alt="GitHub Logo" style ={{width: 60, aspectRatio: 3/2}}></img></a>

            <h3 className="px-2"> LinkedIn:  </h3>
            <a href = "https://www.linkedin.com/in/kevin-ryner/" target="_blank" rel = "noreferrer"  ><img src={linkedInLogo} className="img-fluid rounded " alt="LinkedIn Logo" style ={{width: 40, aspectRatio: 3/2}}></img></a>

            </footer>
        </>
    )
}