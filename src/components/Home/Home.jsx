import React, { Component } from "react";
// import PropTypes from "prop-types";
import styles from "./Home.module.css";
// import * as images from "../../assets";
import logo from "../../assets/_x36_.png";
import queue from "../../assets/queue.png";
import $ from "jquery/dist/jquery";
import icons from "glyphicons";
import { Redirect } from "react-router-dom";
import Signup from "../Signup/Signup";
import NavBar from "../../common/NavBar";
import * as faIcons from "react-icons/si";

class Home extends Component {
  state = {};

  toggleContainer = () => {
    console.log("hello");
    // console.log($(this));
    $("#container1").hide();
    $("#container2").show();
  };

  toggleContainer2 = () => {
    console.log("hello Container 2");
    $("#container1").show();
    $("#container2").hide();
  };

  redirectToMap = () => {
    this.props.history.push(`/Map`);
  };

  redirectToList = () => {
    this.props.history.push(`/List`);
  };

  redirectToSignup = () => {
    this.props.history.push(`/CreateAccount`);
  };

  redirectToLogin = () => {
    this.props.history.push(`/Login`);
  };

  render() {
    return (
      <div className={styles.Home}>
        <div className="docSlider">
          <section id="one">
            <div className={styles.container1} id="container1">
              <div style={{ paddingTop: `1%` }}></div>
              <NavBar bg="transparent" />

              <div className={styles.container} id={styles.container}>
                <h2 id={styles.heading}>
                  <b>
                    FOOT TRAFFIC CONTROL <br />
                    FOR A SAFER WORLD
                  </b>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores
                </p>
                <div id={styles.signupDiv}>
                  <button
                    type="button"
                    className={`btn ${styles.btn1}`}
                    id={styles.btnWhite}
                    onClick={this.redirectToSignup}
                  >
                    Sign Up
                  </button>
                  <button type="button" className="btn btn-danger">
                    Explore More
                  </button>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3">
                    <button
                      type="button"
                      className={`btn btn-default ${styles.mapViewIcon}`}
                      aria-label="Left Align"
                      onClick={this.redirectToMap}
                    >
                      {/* <faIcons.SiGooglemaps /> */}
                      <span
                        className={`glyphicon glyphicon-map-marker`}
                        aria-hidden="true"
                      >
                        {icons.map}
                      </span>
                    </button>
                  </div>
                  <div className="col-sm-3">
                    <button
                      type="button"
                      className={`btn btn-default ${styles.listViewIcon}`}
                      aria-label="Left Align"
                      onClick={this.redirectToList}
                    >
                      <span
                        className={`glyphicon glyphicon-list`}
                        id={styles.iconColor}
                        aria-hidden="true"
                      >
                        {icons.link}
                      </span>
                    </button>
                  </div>
                  <div className="col-sm-3"></div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className={`col-sm-3 ${styles.mapView}`}>Map View</div>
                  <div className={`col-sm-3 ${styles.listView}`}>List View</div>
                  <div className="col-sm-3"></div>
                </div>
                <div className={`${styles.scrollButton}`}>
                  <button
                    onMouseOver={this.toggleContainer}
                    id="scroll1"
                    type="button"
                    className={`btn ${styles.btn1} `}
                    aria-label="Left Align"
                  >
                    <span
                      className={`glyphicon glyphicon-chevron-down ${styles.iconColor}`}
                      aria-hidden="true"
                    >
                      {icons.arrowTriD}
                    </span>
                  </button>
                  <div>Scroll to the problem</div>
                </div>
              </div>
            </div>
          </section>

          <section id="two">
            <div className={styles.container2} id="container2">
              <NavBar bg="black" />

              <h2 id={styles.heading}>
                <b>The Problem</b>
              </h2>
              <br />
              <div className="row">
                <div className="col-sm-6">
                  <img src={queue} id={styles.queueImg}></img>
                </div>
                <div className="col-sm-6">
                  <p id={styles.cont2Heading}>
                    <b>Have you ever stood in Long Queues?</b>
                  </p>
                  {/* <p style={""}> */}
                  <p id={styles.cont2Para}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores
                  </p>
                </div>
              </div>

              <button
                onClick={this.toggleContainer2}
                id="scrollup"
                type="button"
                className="btn btn-default"
                aria-label="Left Align"
              >
                <span
                  className="glyphicon glyphicon-chevron-up"
                  aria-hidden="true"
                  id={styles.cont2iconColor}
                >
                  {icons.arrowTriU}
                </span>
              </button>
              <div>Scroll Up</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
