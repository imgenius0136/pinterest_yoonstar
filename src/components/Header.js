import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logoImage.png";
import "../css/Header.scss";
// import { withRouter } from "react-router";

class Header extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={logo} alt="logo" class="logo_image" />
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/home" class="navbar-item">
              Home
            </Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <Link to="/about" class="navbar-item">
                  About
                </Link>
                <Link to="/jobs" class="navbar-item">
                  Jobs
                </Link>
                <Link to="/contact" class="navbar-item">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <Link class="navbar-logo" to="/home">
            <div class="box">YOONSTARGRAM</div>
          </Link>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-light">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

{
  /* <i class="fab fa-pinterest"></i>
<i class="fas fa-search"></i>
<input type="text"></input>
<i class="fas fa-users"></i>
<i class="fas fa-circle"></i>
<i class="fas fa-envelope"></i>
<i class="fas fa-bell"></i>
<i class="fas fa-ellipsis-h"></i> */
}
