import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Home.css";
import Navigation from "../generic/Navigation"

const Home = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Navigation></Navigation>
      </div>
      <div className="col-lg-6">
        <Jumbotron className="jb-home">
          <h2>Welcome to {props.productName}!</h2>
          <h4>Create beautiful dashboards in 4 simple steps</h4>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </Jumbotron>
      </div>
      <div className="col-lg-6">
        <img
          className="img-frow img-fluid"
          src={"/static/home/dashboard_example.png"}
        ></img>
      </div>
    </div>
  );
};

export default Home;
