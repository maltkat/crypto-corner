import React from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Coins</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
