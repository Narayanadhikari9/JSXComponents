import React from "react";
import "./styles.css";
function Navigation() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="react-app">
          React App
        </a>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
