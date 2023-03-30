import React from "react";


const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg py-0" data-bs-theme="dark">
    <div className="container-fluid navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse show" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
		
	);

};

export default Navbar;
