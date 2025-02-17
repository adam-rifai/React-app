import Container from "./container.jsx";
import Head from "./header.jsx";
import ReactComponentExplanation from "../../src/data/info.js";
const App1 = () => {
  return (
    <>
      <Head />
      <Container />
      <h1>React History</h1>
      <p className="react-history">
        React, a powerful JavaScript library for building user interfaces, was
        developed by Facebook in 2011. The initial concept, crafted by engineer
        Jordan Walke, aimed to solve the complexities of creating dynamic and
        efficient UIs. React’s first major deployment occurred within Facebook's
        newsfeed, followed by its use in Instagram in 2012. The library was
        released as open-source in 2013, quickly gaining traction within the
        developer community. One of its groundbreaking features, the virtual
        DOM, significantly enhances performance by minimizing direct
        manipulation of the actual DOM. React's component-based architecture
        revolutionized front-end development, empowering developers to create
        modular and reusable UI components. Over the years, React has continued
        to evolve, introducing powerful features like Hooks in 2018, which
        transformed the way state and side effects are handled in functional
        components. Thanks to its active community and continuous improvements,
        React has become one of the most widely adopted libraries for building
        modern web applications.
      </p>
      <h1>What is a React component?</h1>
      <ReactComponentExplanation />
      <h1>five essential steps for learning React:</h1>
      <ul>
        <li>Understand JavaScript Fundamentals</li>
        <li>Learn JSX and Components</li>
        <li>Get to Know React Hooks</li>
        <li>Understand State Management and Props</li>
        <li>Learn Routing and Advanced Topics</li>
      </ul>
      <footer>&reg; 2025 Rifai Development. All rights reserved</footer>
    </>
  );
};

export default App1;
