import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../generic/Navigation";
import "./cards.css"

const Cards = (props) => {
  return (
    <div className={`card col-lg-2`} style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        
        <a href="#" className="btn btn-primary">
          Share
        </a>&nbsp;&nbsp;
        <a href="#" className="btn btn-primary">
          Edit 
        </a>
      </div>
    </div>
  );
};

export default Cards;
