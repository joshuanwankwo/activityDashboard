import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/dasboard/dashboard"
import NavBar from "./components/navbar/navbar"

const Index = () => {
  return (
    <div>
      <Dashboard />
    </div>
  ) 
};

ReactDOM.render(<Index />, document.querySelector("#root"));
