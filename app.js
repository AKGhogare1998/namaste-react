import React from "react";
import ReactDOM  from "react-dom/client";
 
//React Element
const heading = React.createElement("h1",{id:"heading"},"hello world");
const jsxHeading = <h1 id="heading" className="head">heading with jsx convention</h1>;

//React Component
const num = 235;
const HeadingComponent = () => (
    <div>
        <TitleComponent />
        {TitleComponent} 
        <h1 className="head">welcome to functional component</h1>
    </div>
);
const TitleComponent = () => (<div>title component {num} mjjhv</div>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
