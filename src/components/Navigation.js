import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="a">
            Result
          </Link>
        </li>
        <li>
          <Link to="/admission" className="a">
            Admission
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
