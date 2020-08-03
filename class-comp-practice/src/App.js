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
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>React Class Components</h3>
        </header>
        <h1>Hi!</h1>
      </div>
    );
  }
}

export default App;
