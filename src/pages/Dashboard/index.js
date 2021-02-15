import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import intelpixel from "../../images/intelpixel.png"; // with import

let Dashboard = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="dashboard-style">
      <div className="container-fluid">
        <div className="row">
          <div className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
            <div className="main-navbar">
              <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                <a
                  className="navbar-brand w-100 mr-0"
                  href="#"
                  style={{ lineHeight: "25px" }}
                >
                  <div className="d-table m-auto">
                    <img
                      id="main-logo"
                      className="d-inline-block align-top mr-1"
                      style={{ maxWidth: "125px" }}
                      src={intelpixel}
                      alt="Intelpixel"
                    />
                    <span className="d-none d-md-inline ml-1"></span>
                  </div>
                </a>
                <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                  <i className="material-icons">&#xE5C4;</i>
                </a>
              </nav>
            </div>
          </div>
          <div className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div className="input-group input-group-seamless ml-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <input
                className="navbar-search form-control"
                type="text"
                placeholder="Search for something..."
                aria-label="Search"
              />{" "}
            </div>
          </div>
          <div className="nav-wrapper">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link " href="add-new-post.html">
                  <span style="font-weight: bold;">Rating</span>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="formsCheckboxDefault"
                    />
                    <label
                      className="custom-control-label"
                      for="formsCheckboxDefault"
                    >
                      {"Rating < 3"}
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="formsCheckboxDefault"
                    />
                    <label
                      className="custom-control-label"
                      for="formsCheckboxDefault"
                    >
                      {"Rating 3-4"}
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox mb-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="formsCheckboxDefault"
                    />
                    <label
                      className="custom-control-label"
                      for="formsCheckboxDefault"
                    >
                      {"Rating > 4"}
                    </label>
                  </div>
                </a>
              </li>
               </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
