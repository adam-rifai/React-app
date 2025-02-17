import Container from "./container.jsx";
import Head from "./header.jsx";
import ReactComponentExplanation from "../../src/data/info.js";
const App1 = () => {
  return (
    <>
      <Head />
      <Container />
      <h1>What is a React component?</h1>
      <ReactComponentExplanation />
      <Container />
      <footer>&reg; 2025 Rifai Development. All rights reserved</footer>
    </>
  );
};

export default App1;
