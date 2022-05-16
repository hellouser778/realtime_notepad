import React from "react";
import logo from "../../.././public/images/Notepadlogo.png";

import "../../../public/assets/css/default.css";

const Header = () => {
  return (
    <>
     <header class="admin__header">
          <div className="wrap-logo">
            <a href="/" class="logo">
              <img src={logo} alt="logo"></img>
              <p className="h3 mx-2">liv-e-Pad</p>
            </a>
          </div>

          <div class="toolbar ">
            <div>
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>

            <a
              href="/signout"
              class="logout border border-light rounded-circle px-2 py-1 bg-primary text-white"
            >
              <i class="bi bi-door-closed-fill"></i>
            </a>
          </div>
        </header>
    </>
  );
};
export default Header;
