import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand mx-4" to="/">
            Material-Tailwind
          </Link>

          <button
            class="navbar-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Form 1
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/multistepform">
                  Form 2
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/microsoftclone">
                  MicrosoftClone
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
