import Container from "./container.jsx";
import Head from "./header.jsx";
import ReactComponentExplanation from "../data/info.js";
import ReactHistory from "../data/react-history.jsx";
import Conclusion from "../data/conclusion.jsx";
const App1 = () => {
  return (
    <>
      <Head />
      <Container />
      <ReactHistory />
      <ReactComponentExplanation />
      <Conclusion />
      <footer>&reg; 2025 Rifai Development. All rights reserved</footer>
    </>
  );
};

export default App1;
