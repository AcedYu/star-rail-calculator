import React from "react";
import "./styles.css";
// import { useSelector } from "react-redux";
import Header from "./component/Nav";
import Calculator from "./component/Table";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
};

export default App;
