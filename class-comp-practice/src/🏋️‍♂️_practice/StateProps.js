// I am about to set up to pass some Props around to a functional component
import React from "react";

const BoratCrush = (props) => <h2>I love {props.name}</h2>;

class PracticeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      boratMSG: "..... Not!!",
      crush: "pamela anderson",
    };
  }

  render() {
    return (
      <div>
        <h2>You are my friend, {this.state.boratMSG}</h2>
        <BoratCrush name={this.state.crush} />
      </div>
    );
  }
}

export default PracticeApp;
