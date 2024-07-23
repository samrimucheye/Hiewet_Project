import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>
          <strong>הייווט דלתות</strong>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">דף הבית </Link>
        </li>
        <li>
          <Link to="/about">עלינו</Link>
        </li>
        <li>
          <Link to="/contact">צור קשר</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
