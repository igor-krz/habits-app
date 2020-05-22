import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navbar  justify-content-between" id="navigation">
        <a className="navbar-brand">HabiTrack</a>
        <Link to="/" className="nav-link">
          <button type="button" id="navButton">
            Logout
          </button>
        </Link>
      </nav>

      {/* <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <button type="button" id="navButton">
              Logout
            </button>
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Navigation;
