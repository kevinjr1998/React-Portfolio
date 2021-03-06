import {React} from "react"


function NavBar({ currentPage, handlePageChange }){
return (
    <ul className="nav nav-tabs d-flex flex-wrap">
      <li className="nav-item mx-5">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item mx-5">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item mx-5">
        <a
          href="#CV"
          onClick={() => handlePageChange('CV')}

          className={currentPage === 'CV' ? 'nav-link active' : 'nav-link'}
        >
          CV
        </a>
      </li>
      <li className="nav-item mx-5">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
)
}

export default NavBar;