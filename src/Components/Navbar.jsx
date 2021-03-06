import React from "react";
import "./Styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


function Navbar() {
  return (
    <Router>
      <div className="container" id="mySidenav" className="sidenav">
        <Link to="/" id="about">
          About
          <span className="icons_about">
            <i className="fa fa-user"></i>
          </span>
        </Link>
        <Link to="/Portfolio" id="portfolio">
          Portfolio
          <span className="icons">
            <i className="fa fa-eye"></i>
          </span>
        </Link>
        <Link to="/Contact" id="contact">
          Contact
          <span className="icons">
            <i className="fa fa-envelope"></i>
          </span>
        </Link>

        <a
          href="https://www.linkedin.com/in/niko-jovanovic/"
          target="_blank"
          rel="noopener noreferrer"
          id="linkedin"
        >
          LinkedIn
          <span className="icons">
            <i className="fa fa-linkedin"></i>
          </span>
        </a>

        <a
          href="https://github.com/nikola4work"
          target="_blank"
          rel="noopener noreferrer"
          id="github"
        >
          GitHub
          <span className="icons">
            <i className="fa fa-github"></i>
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/1hONyQ59qeaBG6xmv9lzlfMPw9K1fIszS/view?usp=sharing"
          id="resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <span className="icons">
            <i className="fa fa-download"></i>
          </span>
        </a>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
