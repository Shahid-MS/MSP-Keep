import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const RegisterLogin = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div class="container mt-5 ">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 col-md-8 col-10">
            <h2>
              <b> Sign in or Create account</b>
            </h2>
            <label for="email" class="form-label mt-3">
              Email address
            </label>
            <input type="email" class="form-control" />
            <button class="btn btn-success col-12 mt-3">
              Continue with email
            </button>
            <hr />

            <div className="d-flex justify-content-center">
              <ul id="social-icons nav">
                <li className="nav-item d-inline-block me-3 hover">
                  <a
                    href="https://www.facebook.com/login/"
                    target="_blank"
                    className="nav-link"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li className="nav-item d-inline-block me-3 hover">
                  <a
                    className="nav-link"
                    href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li className="nav-item d-inline-block hover">
                  <a
                    href="https://www.linkedin.com/uas/login?fromSignIn=true&trk=cold_join_sign_in"
                    target="_blank"
                    className="nav-link"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>

            <h6 class="text-success text-center mt-1">More ways to sign in</h6>
            <hr />
            <p class="text-muted text-center mt-3">
              By signing in or creating an account, you agree with our
              <span className="ms-1 me-1">
                <a href="" class="text-muted text-decoration-none">
                  Terms & conditions
                </a>
              </span>
              and
              <span className="ms-1">
                <a href="" class="text-muted text-muted text-decoration-none">
                  Privacy statement
                </a>
              </span>
            </p>
            <hr />
            <div class="text-center">
              All rights reserved.
              <br />
              Copyright (2022 - {date}) - MSP.com™
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLogin;
