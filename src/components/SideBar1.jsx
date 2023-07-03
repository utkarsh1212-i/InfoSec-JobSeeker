// import React from 'react'

function SideBar1() {
  return (
    <>
      <div
        className="flex-shrink-0 justify-content-between gap-3 p-3 bg-body-tertiary m-3 rounded "
        style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)" }}
      >
        {/* /PROFILE SECTION */}
        <div className="d-flex flex-column align-items-center">
          <div
            className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
            style={{ height: "3rem", width: "3rem" }}
          >
            <p className="align-middle my-0">AK</p>
          </div>

          <div>
            <h6>My Profile</h6>
          </div>
        </div>
        {/* MY JOBS */}
        <div>
          <img src="/Group 212.png" />
          <div>
            <ul>
              <li className="list-unstyled">Favorite Jobs</li>
              <li className="list-unstyled">Applied Jobs</li>
              <li className="list-unstyled">Closed Jobs</li>
            </ul>
          </div>
        </div>
        {/* MY APPLICATION */}
        <div>
          <img src="/Group 204.png" />
          <div>
            <ul>
              <li className="list-unstyled">All</li>
              <li className="list-unstyled">Under Process</li>
              <li className="list-unstyled">Offers</li>
              <li className="list-unstyled">Closed Jobs</li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="d-flex flex-column gap-3">
          <a className="d-flex gap-2 text-decoration-none text-black" href="#">
            <img src="/Vector.svg" />
            <p className="fw-bold my-0">My Profile</p>
          </a>
          <a className="d-flex gap-2 text-decoration-none text-black" href="#">
            <img src="/settings (1) 2.svg" />
            <p className="fw-bold my-0 ">Settings</p>
          </a>
          <a className="d-flex gap-2 text-decoration-none text-black" href="#">
            <img src="/exit 1.svg" />
            <p className="fw-bold my-0">Logout</p>
          </a>
        </div>
        {/* <div></div>
        <div></div> */}
      </div>
    </>
  );
}

export default SideBar1;
