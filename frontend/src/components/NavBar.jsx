import React from "react";

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
          <a href="/">דף הבית </a>
        </li>
        <li>
          <a href="/about">עלינו</a>
        </li>
        <li>
          <a href="/contact">צור קשר</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
