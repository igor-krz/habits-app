import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      {/* <nav className="navbar" id="mainNav">
        <button type="button" className="btn btn-outline-dark">
          <Link to="/">Logout</Link>
        </button>
      </nav> */}
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <button type="button" className="btn btn-primary">
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
