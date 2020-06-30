import React from "react";
import { Jumbotron } from "react-bootstrap";
import Navigation from "../generic/Navigation"

const Workspace = (props) => {
  return (
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
  );
};

export default Workspace;
