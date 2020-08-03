// Follow allong Objective:
// - Build out components and put some of the recent concepts together.abs
// Concepts to Review
// - Updating state on a parent component
// - Wire up the state to several other components as we pass around props
// - Create and pass around several handler function so that I can update and delete state.abs

//- Going to set up a form component so that I can use it to update a message component

import React from "react";

const RandomMessage = (props) => <h3>Just {props.message}</h3>;

const FormComponent = (props) => {
  return (
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage} />
    </form>
  );
};

class Practice2 extends React.Component {
  constructor() {
    super();
    this.state = {
      advice: "fight, then fight again, then again",
    };
  }

  messageChangeHandler = (e) => {
    this.setState({ advice: e.target.value });
  };

  render() {
    return (
      <div>
        <FormComponent />
        <RandomMessage
          message={this.state.advice}
          updateStateMessage={this.updateStateMessage}
        />
      </div>
    );
  }
}

export default Practice2;
