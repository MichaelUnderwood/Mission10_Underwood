import logo from './bowlingteam.jpg';
import React from 'react';

function Header(props: any) {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <h1 className="text-black">[props.title]</h1>
          </ul>
          <div>
            <img
              src={logo}
              className="logo"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
