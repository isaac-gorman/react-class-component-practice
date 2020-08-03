import React from "react";

// I am going to build out a button that I can click on to understand what is going on under the hood.

class Button extends React.Component {
  // clickHandler is a functional handler that will allow me to interact with the button.
  clickHandler = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}
export default Button;

// Above I have created a button using JSX.
