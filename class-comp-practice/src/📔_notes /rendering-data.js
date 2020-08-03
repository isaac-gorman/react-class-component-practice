// Objective
// - I need to be able to explain what a react class component is.
// - Use a class comp to render some state data to the DOM

// Q: What is Component?
// - It is a constructor class that comes with React that has some very usefull properties on it.
// - The class component is just like any other class I have come across in vinilla js.
// - The majority of the class components abilities comes from using the single 'base Component'
// - Using the singe 'base Compontent' is what allows dev's to scale out completely stactic component based web pages to become fully functional web applications.

// Q: What did React give us the idea for?
// - React gave dev's the approach to break down interfaces as independent pieces of UI.
// - As of now I have learned how to use function based compoenets to build out some DOM elements.
// - Now it is time to graduate to the next level, and to learn how to use React.Component based class. The React.Component based class will allow me to use what the methods that the React team has created for me to start to leverage the Component Lifecycle.
// - These methods known as "Life Cycle Hooks" will give me the ability to control how components work.
// - Now if I want to use the "Lif Cycle Hooks" I have to summon them by using the "extends React.Component" parent class pattern.
// - This is how it looks like:
class FooComponent extends React.Component {}
// - If I ever see code that looks like that pattern above I will have the ability to use the the special React.Component parent class "Life Cycle Hooks".

// Q: What is the outcome of setting up a component as a class?
// - By setting a component as a class I will be able to set it to a data object in which my class component is concerend with.
// - I will be able to accomplish this by using "state" and setting up the object on my constructor function.
// - After I have some data that can be rendered to the DOM, I need a mechanism that will allow me to render that data.
// That mechanism is the "render()" method which is one of those magical "Life Cycle Hooks".
//

// Q: How do you declare a class component?
// - Step 1) Declare the class component by extedning the React.Component parent class. e.g:
class FooComponent extends React.Component {}
// - uses the the constructor function to set up some state e.g. "class FooComponent extends React.Component {}"
// - once some state has been intiated using the constructor function, its time for Step 2)
// - Step 2) Call the "super()" "Life Cycle Hook". "super()" will now give me the ability to acces the "this" keyword.
// Step 3) Now you need a way to paint some UI (data) to the DOM. So I need to declare the "render" method "Life cyle hook".

// Q: What is a good way to remember the steps of how to render a class component?
// - By remembering the band name: "Creedence Clearwater Revival(CCR)" which stand for:
// Class
// Constructor
// Render/Return

// Step 1)  Declaring the class component by extedning the React.Component parent class. AKA the base class.
// Step 2) Set up the "constructor" and add state
// Step 3) Render some UI (data) to the DOM
class TheComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    <h3>Hello!</h3>;
  }
}

// Q: What are the capabilites of a dev once the basic layout of the class components is created?
// - The class component is now capable of being a bit more dynamic
// - For the class component to become more dynamic I will need to declare some pre defined data as information that I'd like to display.
// - After pre defining the data I would like to display I will do something magical called "interperlation" in order to present that pre defiend data to the DOM within some Text.

// Q: What are the benifit that come built in with the React API?
// - Alot of methods but I will dive into that information soon.
// - I need to foucs on something else today.

// Q: What will my main focus for this Class Component lesson with React?
// - Learning how a component can be built in such a manner to care about its own state (data) while having the ability to manage that state in a reactive way.
// - The state object that I have set up on the constructor has a very unique way to React giving components the ability to care about their own state while having the ability to manage that state in a reactive way.
// - The outcome of this "self knowing" component is the ability to drive the interface using data.
// - Think of instagram for a second. When interacting with the Instagram interface you come across endless amounts of data. Due to the vast amount of data one can come across when using Instagram or other platforms engineers at FaceBook crafted React to be able to render UI in close to real time. This reactivity that React is able to enable is what makes it such a beautiful tool.
