import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.modules.css";
const Navbar = () => {
  return (
    <nav>
      <div>
        {/* Logo */}
        <div className="logo">
          <img
            src={require("../../Assets/logo/logo.png")}
            className="w-100 img-fluid"
            alt=""
          />
        </div>

        {/* Links */}
        <ul>
          <li>
            <Link className="active">
              <i className="fa-regular fa-bell"></i>
              <span>Alerts</span>
            </Link>
          </li>

          <li>
            <Link className="active">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>Training</span>
            </Link>
          </li>

          <li>
            <Link className="disabled">
              <i className="fa-solid fa-gears"></i>
              <span className="">Automation</span>
              <small className="comingsoon"> Coming Soon</small>
            </Link>
          </li>

          <li>
            <Link className="disabled">
              <i className="fa-solid fa-folder-open"></i>
              <span>Portfolio</span>
              <small className="comingsoon"> Coming Soon</small>
            </Link>
          </li>

          <li>
            <Link className="disabled">
              <i className="fa-solid fa-chart-gantt"></i>
              <span>Trading</span>
              <small className="comingsoon"> Coming Soon</small>
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile */}

      <footer>
        <div className="profile">
          <figure>
            <img src={require("../../Assets/Porfile/engineer.png")} alt="" />
          </figure>
          <div className="info">
            <p>Abdelrhman</p>
            <span>Beginner</span>
          </div>
        </div>

        <p className="title">street Suite. 2.0</p>
      </footer>
    </nav>
  );
};

export default Navbar;
