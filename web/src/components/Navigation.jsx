import React, { Fragment } from "react";

function Navigation({ children }) {
  return (
    <Fragment>
      <div id="header" className="container d-flex align-items-center">
        <div className="logo mr-auto">
          <h1 className="text-light">
            <a href="/#">
              <span>Raven</span>
            </a>
          </h1>
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="/#header">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/#pricing">Pricing</a>
            </li>
            <li className="drop-down">
              <a href="/#">Drop Down</a>
              <ul>
                <li>
                  <a href="/#">Drop Down 1</a>
                </li>
                <li className="drop-down">
                  <a href="/#">Drop Down 2</a>
                  <ul>
                    <li>
                      <a href="/#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">Drop Down 3</a>
                </li>
                <li>
                  <a href="/#">Drop Down 4</a>
                </li>
                <li>
                  <a href="/#">Drop Down 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>

            <li className="get-started">
              <a href="/#about">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
}

export default Navigation;