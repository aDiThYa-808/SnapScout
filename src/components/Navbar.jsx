import React from "react";
//import logo from "../assets/SnapLogo.png"

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
           <b><i>SnapScout</i></b> 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-between" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                {props.linkOne}
              </a>
              <a className="nav-link" href="#">
                {props.linkTwo}
              </a>
              
            </div>
             <div className="d-flex justify-content-end">
           <button className="btn btn-light mx-1 ">Dark</button>
          <button type="button" className="btn btn-primary mx-1"><b>Sign Up</b></button>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
