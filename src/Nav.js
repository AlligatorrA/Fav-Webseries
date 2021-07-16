import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <button id="btn">
        {" "}
        <Link to="/Biotech" className="link">
          {" "}
          Biotechnology{" "}
        </Link>
      </button>

      <button id="btn1">
        <Link to="/Scifi" className="link">
          {" "}
          sci-fi{" "}
        </Link>
      </button>

      <button id="btn2">
        {" "}
        <Link to="/Action" className="link">
          {" "}
          Action/History{" "}
        </Link>
      </button>
      <hr />
    </div>
  );
}

export default Nav;
