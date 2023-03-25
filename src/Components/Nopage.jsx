import React from "react";
import { Link } from "react-router-dom";

const Nopage = (props) => {
  return (
    <>
      <div className={`container text-center white-${props.Dmode}`}>
        <h1 className=" mt-5 mb-2">Oops!! Error 404</h1>
        <Link to="/" className="btn btn-success text-center">
          Go to Homepage
        </Link>
      </div>
    </>
  );
};

export default Nopage;
