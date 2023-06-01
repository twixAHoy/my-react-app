import React from "react";

class Car extends React.Component {
  render() {
    return (
      <div class="mx-auto">
        {console.log(this.props.name)}
        <div>
          <img
            src={this.props.imageURL}
            alt="Mercedes"
            class="rounded-xl shadow-xl"
            width="300px"
          />
        </div>
        <div>
          <h1 class="text-4xl font-bold text-gray-700 pt-4">
            {this.props.name}
          </h1>

          <p class="text-s text-gray-800 pt-4">{this.props.productType}</p>
        </div>
      </div>
    );
  }
}

export default Car;
