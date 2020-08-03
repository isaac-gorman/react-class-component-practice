import React from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>React Class Components</h3>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message:
        "Only when you work through the fear, and confusion comes progress!!",
      prayer:
        "God please protect others, and just give me the oppurtunity to face my fears",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>React Class Components</h3>
        </header>
        <h1>Hi!</h1>
        <div>{this.state.message}</div>
        <br />
        <div>{this.state.prayer}</div>
      </div>
    );
  }
}

export default App;
