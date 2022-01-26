import React from 'react';

export default function Navbar() {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Weather4U</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Weather</a>
        </li>
      </ul>
    </div> */}
  </div>
</nav>);
}
