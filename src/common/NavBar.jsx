import React, { Component } from "react";
import logo from "../assets/_x36_.png";

class NavBar extends Component {
  state = {};
  render() {
    const { bg } = this.props;
    console.log(bg);
    const Styles = {
      backgroundColor: bg,
    };
    return (
      <nav className={`navbar navbar-expand-lg navbar-dark`} style={Styles}>
        <a className="navbar-brand" href="/" style={{ marginLeft: `50px` }}>
          <img src={logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={`navbar-nav`}>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Aboutus"
                style={{ marginLeft: `380px` }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Onboard"
                // onMouseOver={}
                // style={{ color: `white` }}
              >
                Store Onboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Integration"
                // style={{ color: `white` }}
              >
                Integration
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Login"
                style={{ marginLeft: `300px` }}
              >
                Login
              </a>
            </li>
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="button"
              style={{ marginLeft: `20px` }}
            >
              Create Account
            </button>
          </ul>
          {/* </div> */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
