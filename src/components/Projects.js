import Divider from "./Divider";
import Divider2 from "./Divider2";
import React from "react";
import "../styles/Projects.css";
import Project_data from "./Project_data";
import Card from "./Card";
const Projets = (props) => {
  const cards = Project_data.map((x) => {
    return <Card {...x} />;
  });
  return (
    <>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <Divider />
        <div className="holder">{cards}</div>
      </div>
      <Divider2 />
    </>
  );
};

export default Projets;
