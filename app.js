const heading = React.createElement("h1", {class: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(heading);

const parent = React.createElement("div",{id:"parent"}, React.createElement("div", {class:"child"}, React.createElement("h1",{class:"head"}, "Hello here we are creating nested elements using REACT JS"), React.createElement("h2", {class:"head"}, "H2 TAG")));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent); 
