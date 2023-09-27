import "../styles/Lower.css";
import { SlUser, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { DiGithub } from "react-icons/di";
import { HiOutlineMail } from "react-icons/hi";
import React from "react";
const Lower = () => {
  const [toggle, setToggle] = React.useState(false);
  const change = () => {
    setToggle(!toggle);
  };
  const t = [
    <div className="t-menu">
      <button className="c-btn" onClick={change}>
        <SlSocialLinkedin size={25} />
      </button>
      <button className="c-btn" onClick={change}>
        <SlSocialInstagram size={25} />
      </button>
      <button className="c-btn" onClick={change}>
        <HiOutlineMail size={27} />
      </button>
      <button className="c-btn" onClick={change}>
        <DiGithub size={30} />
      </button>
    </div>,
  ];
  return (
    <div className="lower">
      {toggle && t}
      <button className="c-btn" id="start" onClick={change}>
        <SlUser size={25} />
      </button>
    </div>
  );
};
export default Lower;
