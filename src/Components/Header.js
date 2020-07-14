import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Header = () => {
  const data = useContext(GlobalContext);
  if (data.loading) {
    return <p>hello</p>;
  }
  return (
    <header id="header">
      <div id="topbar">
        <div className="container">
          <div className="social-links">
            {data.data.socialicon.map((u, i) => {
              return (
                <a href={u} className="twitter" key={i}>
                  <i className="fa fa-twitter" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo float-left">
          <h1 className="text-light">
            <a href="#intro" className="scrollto">
              <span>Rapid</span>
            </a>
          </h1>
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
