import React from "react";
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand fw-bolder text-${props.mode==='light'?'black':'white'}`} to="/">
            {props.title}
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className={`nav-a active text-${props.mode==='light'?'black':'white'}`} aria-current="page" to="/" style={{textDecoration: 'none'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-a text-${props.mode==='light'?'black':'white'}`} to="/about" style={{textDecoration: 'none'}}>
                 About Us
                </Link>
              </li>
            </ul>
            

            <div className="dropdown">
              <button
                className={`btn btn-outline-${props.mode==='light'?'light':props.mode} dropdown-toggle text-${props.mode==='light'?'black':'white'} bg-${props.mode==='light'?'light':props.mode}`}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Color Theme Mode
              </button>
              <ul className={`dropdown-menu bg-${props.mode==='light'?'light':props.mode}`} aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link className={`dropdown-item text-${props.mode==='light'?'black':'white'}`} to="">
                    <div className="form-check form-switch" onClick={props.darkmode}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="c1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Dark Mode
                      </label>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item text-${props.mode==='light'?'black':'white'}`} to="#" onClick={props.secondarymode}>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Gray Mode
                      </label>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item text-${props.mode==='light'?'black':'white'}`} to="#" onClick={props.greenmode}>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Green Mode
                      </label>
                    </div>
                  </Link>
                </li>
              
              
                <li>
                  <Link className={`dropdown-item text-${props.mode==='light'?'black':'white'}`} to="#" onClick={props.infomode}>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Teal Mode
                      </label>
                    </div>
                  </Link>
                </li>
              
              
                <li>
                  <Link className={`dropdown-item text-${props.mode==='light'?'black':'white'}`} to="#" onClick={props.redmode}>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Red Mode
                      </label>
                    </div>
                  </Link>
                </li>
              
              
                <li>
                  <Link className={`dropdown-item text-${props.mode==='light'?'black':'white'}`} to="#" onClick={props.yellowmode}>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Yellow Mode
                      </label>
                    </div>
                  </Link>
                </li>
              
              
              </ul>
            </div>
          </div>
        </div>
      </nav>
    
     
    </>
  );
}
