// import React from "react"; //this in old versions of react.

import Header from "./components/header";
import China from "./components/entry-components/china-entry";
import France from "./components/entry-components/france";

const App = () => {
  return (
    <>
      <Header />
      <China />
      <France />
      <China />
      <France />
    </>
  );
};

export default App;
