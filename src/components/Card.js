import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" className="img-title" />
      <div className="description">
        <br />
        <p>{props.title}</p>

        <h3>{props.title2}</h3>
        <p className="cw">{props.description}</p>
        <br></br>
        {props.type === "internship" && (
          <button className="card-btn">Certificate</button>
        )}
        {props.type === "project" && (
          <button className="card-btn">Source</button>
        )}
        <p id="time">{props.time}</p>
      </div>
    </div>
  );
};

export default Card;
