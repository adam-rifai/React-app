/* this is a paragraph which giving a brief definition about a React component---------!>*/
function ReactComponentExplanation() {
  return (
    <>
      <h1>What is a React component?</h1>
      <p className="paragraph">
        A <span className="highlight">React component</span> is a reusable piece
        of UI that helps build structured and maintainable interfaces. It can be
        a <span className="highlight">functional component</span>, which is a
        simple function returning JSX, or a
        <span className="highlight">class component</span>, which is an ES6
        class extending <code className="code">React.Component</code>.
        Components can be <span className="highlight">stateful</span> (managing
        internal data) or <span className="highlight">stateless</span>
        (just displaying props). They allow{" "}
        <span className="highlight">composition</span> (small components forming
        larger UIs) and <span className="highlight">reusability</span>.
        Functional components are preferred in modern React, especially with
        hooks like
        <code className="code">useState</code> and{" "}
        <code className="code">useEffect</code>. Components receive
        <span className="highlight">props</span> to make them dynamic, allowing
        them to be customized wherever used.
      </p>
    </>
  );
}

export default ReactComponentExplanation;
