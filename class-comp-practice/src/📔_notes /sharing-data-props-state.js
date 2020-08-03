// Learning Objective
// - Understand how to share data between components using state and props.

// Q: How do will I share state with nested components using the React paradigm called props?
// - Learning how to link up data using a to to bottom (unidirectional) method will help me understand how react works in general.

// Q: How do we pass around state from one component to another?
// - I need to use "state to props" to achive functionality.
// - "state to props" gives me the ablilty to set the state of a component and having the option to share it amoungst all the components by passing it down (drilling it down) via props.

// Q: What is the outcome of React's state being presistent as long as the component is on the screen.
// - The outcome of being able to hold state presistently as long as component is rendered on the screen is the ablity to hold memory for our application.
// Memory is:
// 1 - Anything that we pull from the server is "Memory"
// 2 - Also anything that we edit from a submission form is "Memory"
// 3 - Finally anything a user inteacts with on the web page is "Memory"

// Q: What do I need to remember about state and why?
// - Isaac remember that state is just an object that lives on the "class component"'s constructor
// - I can easly just take this state and pass it around via props.
// - Why is this important to rember? Becuase the ablitity to pass around state via props is one of the many reasons why React is so powerful.
// - Furthemore, when the state object is altered (changed), the component will re-render.
// - Finally remember that I can also pass whatever data that is found on the state object as props and pass it around to other components.

// Q: What do I need to remember about props and why?
// - Isaac remember that props are limited in function. Props are just "read-only" and pass props to components to display data to the screen (DOM).
// - When a component's props are bound to the state of the parent component, the child component will re-render as well.
// - This is curical to relize becuase this is how one will build out "reactive" data in react.abs
