// Objective
// - Build a small app that can handle some datat that I can pass through a few JSX elements

// - Using some event handler function I build, for the the following evenmts acropss multiple elements
// onClick
// onDoubleClick
// onMouseEnter
// onChange

import React from "react";

// Build a single click handler function called "singleClickHandler" function that will call alert("Single Click");

class Event2 extends React.Component {
  constructor() {
    super();
    this.state = {
      someValue: "",
    };
  }

  singleClickHandler = () => alert("Single Click!");
  doubleClickHandler = () => alert("Double Clicked!");
  mouseEnterHandler = () => alert("Mouse entered!");
  changeHandler = (e) => {
    this.setState({ someValue: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello Handlers</h1>
        <h2>Let's build out some handler functions.</h2>
        <button onClick={this.singleClickHandler}>Click Handler Demo</button>
        <button onDoubleClick={this.doubleClickHandler}>
          Double Click Handler
        </button>
        <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
        <input onChange={this.changeHandler} placeholder="Change my input" />
      </div>
    );
  }
}

export default Event2;
