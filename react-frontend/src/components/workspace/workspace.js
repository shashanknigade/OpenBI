import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../generic/Navigation";
import Cards from "./cards";
import "./workspace.css"
import { useState,useEffect } from "react";

const Workspace = (props) => {
  //const myWorkspaces = ["Covid Dashboard", "Sales Dashboard", "Risk & Issues","Risk & Issues","Risk & Issues","Risk & Issues","Risk & Issues"];

  const [myWorkspaces, getMyWorkspaces] = useState([])

  useEffect(() => {
    fetch('/myworkspace').then(res => res.json()).then(data => {
      getMyWorkspaces(data.key);
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Navigation></Navigation>
        </div>
        <div className="col-lg-12">
          <Jumbotron className="jb-home">
            <h2>Welcome to Workspaces {props.name}!</h2>
          </Jumbotron>
        </div>
      </div>
      <div className="row row-workspace">
      
        {myWorkspaces.map((workspacename,index) => (
          <Cards name={workspacename} place={index}></Cards>
        ))}
        </div>
      
    </div>
  );
};

export default Workspace;
