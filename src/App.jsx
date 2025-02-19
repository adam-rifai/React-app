// import React from "react"; //this in old versions of react.

import Header from "./components/header";
import China from "./components/entry-components/china-entry";
import France from "./components/entry-components/france";

const App = () => {
  const now = new Date().toLocaleString();
  return (
    <>
      <Header />
      <China
        img="/china.webp"
        name="Shanghai, China"
        date={now}
        location="📍"
      />
      <France img="/paris.webp" name="Paris, France" date={now} location="📍" />
      {/* <China img="/china.webp" name="Shanghai, China" date={now} />
      <France img="/paris.webp" name="Paris, France" date={now} /> */}
    </>
  );
};

export default App;
