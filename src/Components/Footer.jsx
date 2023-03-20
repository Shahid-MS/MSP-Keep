import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = (props) => {
  const date = new Date().getFullYear();
  return (
    <>
      <div style={{ marginTop: "auto" }}>
        <div className={`mt-4 footer footer-${props.Dmode}`}>
          <div className="container">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-md-5 jsc">Copyright@{date} MS 2.O Inc.</div>
              <div className="col-md-5 jse">
                <ul id="social-icons nav">
                  <li className="nav-item d-inline-block me-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=100005707203252"
                      target="_blank"
                      className="nav-link"
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="nav-item d-inline-block me-2">
                    <a className="nav-link">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="nav-item d-inline-block">
                    <a
                      href="https://www.linkedin.com/in/ms20/"
                      target="_blank"
                      className="nav-link"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
