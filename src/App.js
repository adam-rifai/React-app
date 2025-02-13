import "./App.css";
import React from "react";
// import components:
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default App;
