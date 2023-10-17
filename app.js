import React from "react";
import ReactDOM  from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id:"child"},[React.createElement("h1",{id:"h1"},"i am h1 tag"),React.createElement("h1",{id:"h1"},"i am h2 tag")]));
console.log(parent)
root.render(parent);
