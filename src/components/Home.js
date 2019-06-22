import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <nav className="nav-1">
          <Link to="/" className="nav-link">
            {" "}
            <span>&#8592;</span> Go Back
          </Link>
        </nav> */}
        <ul>
          <li>
            <Link to="/assignment-1">Go to Assignment 1</Link>
          </li>
          <li>
            <Link to="/assignment-2">Go to Assignment 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;