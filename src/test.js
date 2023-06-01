//type 'imr' and enter
//import React from "react";
//type 'imcrp' and enter
import React, { Component } from "react";
import PropTypes from "prop-types";
//type 'import reactDOM' and enter
import { ReactDOM } from "react";

const RenderList = (props) => {
  const cars = ["BMW", "AUDI", "MERCEDES"];

  return (
    <ul>
      {cars.map((car) => (
        <li>{car}</li>
      ))}
    </ul>
  );
};
