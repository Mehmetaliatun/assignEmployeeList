import React, { Component } from "react";
import data from "../data/data";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      // <div className="bg-primary d-flex flex-column justify-content-center">
      //   <h1 className="bg-primary text-center ">Employee List</h1>
      //   <h3 className="text-center">emp rate</h3>
      //   <div className="d-flex flex-column justify-content-center align-items-center">
      //     <img src="" alt="" />
      //     <h5>name</h5>
      //     <p>mail</p>
      //     <p>age</p>
      //   </div>
      //   <div className="d-flex justify-content-center m-4">
      //     <button className="bg-primary m-2">Prev</button>
      //     <button className="bg-primary m-2">Next</button>
      //   </div>
      // </div>
      <div className="buton">
        <button>Prev</button>
        <button>Next</button>
      </div>
    );
  }
}
