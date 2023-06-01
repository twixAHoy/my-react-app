import React from "react";
import Car from "./Car";
import cars from "./Cars";

//functional component

/*function CarList() {
  return "Woohoooo, let's return multiple cars!";
}*/

class CarList extends React.Component {
  render() {
    //looping through cars from Cars.js
    return (
      <div class="grid sm:grid-cols-3 gap-6">
        {cars.map(function (car) {
          return <Car {...car} />;
        })}
      </div>
    );
  }
}

//export to browser
export default CarList;
