// Write your JS code here

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-name">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="wave"
          className="image1"
        />
        <h1>Wave</h1>
      </div>

      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
