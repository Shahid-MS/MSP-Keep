import logo from "../Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = (props) => {
  const [enable, setEnable] = useState("Enable");

  const darkmode = () => {
    props.darkmode();
    enable === "Enable" ? setEnable("Disable") : setEnable("Enable");
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.Dmode} navbar-${props.Dmode}`}
        data-bs-theme={`${props.Dmode}`}
      >
        <div className={`container`}>
          <Link to="/" className={`navbar-brand`}>
            <img src={logo} alt="logo" width="40" height="40" /> MSP - Keep
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2 mt-lg-0 justify-content-between">
              <form className="d-flex">
                <input
                  className={`form-control me-auto input-${props.Dmode}`}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className={`btn white-${props.Dmode}`}>
                  <SearchIcon />
                </button>
              </form>
              <div className="d-flex mt-2 justify-content-between">
                <li className="nav-item">
                  <Link className="btn btn-outline-success me-2" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-success" to="/login">
                    Register
                  </Link>
                </li>
              </div>
              <div className="form-check form-switch mt-2 mt-lg-3 ms-lg-2">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  onClick={darkmode}
                />

                <label className={`form-check-label white-${props.Dmode}`}>
                  {enable} Dark Mode
                </label>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
