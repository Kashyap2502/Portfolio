import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import { RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const call = () => {
    setToggle(!toggle);
  };
  const menu = [
    <div className="menu_toggle">
      <li>
        <a href="#About" onClick={call}>
          About
        </a>
      </li>
      <li>
        <a href="#education" onClick={call}>
          Education
        </a>
      </li>
      <li>
        <a href="#internships" onClick={call}>
          Internships
        </a>
      </li>
      <li>
        <a href="#projects" onClick={call}>
          Projects
        </a>
      </li>

      <li className="menu-btn">
        <a href="#contact" onClick={call}>
          Contact
        </a>
      </li>
      <button className="menu-btn" onClick={call}>
        View Resume
      </button>
    </div>,
  ];
  return (
    <div className="nav">
      <div className="title">
        <span>Kashyap</span>
      </div>
      <div className="list">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#internships">Internships</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </div>
      <div className="nav-btns1">
        <div className="nav-btns">
          <a href="#contact">Contact</a>
          <button>View Resume</button>
        </div>
        <div className="toggle">
          <RiMenu3Line color="white" size={40} onClick={call} />
          {toggle && menu}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
