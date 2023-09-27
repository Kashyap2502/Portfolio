import React from "react";
import "../styles/Header.css";
import Divider from "./Divider";
import Divider2 from "./Divider2";
const Header = () => {
  return (
    <>
      <Divider />
      <div className="Header">
        <div className="left">
          <h1>Kashyap Chandra</h1>
          <p>
            {" "}
            I'm Kashyap Chandra, Student of Indian Institute of Information
            Technology Kottayam, a web developer and AI/ML enthusiast. Join me
            on a journey through my portfolio, where you'll discover the
            projects that showcase my skills in web development and AI/ML
          </p>
        </div>
      </div>
      <Divider2 />
    </>
  );
};

export default Header;
