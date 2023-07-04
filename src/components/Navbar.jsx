// import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary border border-bottom ">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand d-flex" href="#">
          <img src="../../public/Group 32.png" />
          <p className="d-flex align-items-center blockquote-footer">
            Securing Digital World
          </p>
        </a>
        <div
          className="collapse navbar-collapse"
          style={{ "flex-grow": 0 }}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <img src="../../public/Group 71.png" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="../../public/Group 70.png" />
              </a>
            </li>
            <li className="nav-item dropdown d-flex flex-column align-items-center">
              <a
                className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ height: "3rem", width: "3rem" }}
                href="#"
              >
                <p className="align-middle my-0">AK</p>
              </a>
              <div>
                <h6>My Profile</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
