import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav className="flex navbar navbar-expand-md navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
          <div className="logo">
                <img src="./images/logo.png" alt="" />
                <div>
                    <h2>SAM</h2>
                    <p>Medicare</p>
                </div>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Doctors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Specialist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;