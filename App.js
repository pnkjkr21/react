const saloni = document.getElementById("root");
const element = React.createElement(
  "div",
  { id: "heading" },
  React.createElement('h1', {id: 'child1'}, 'hello India!'),
  React.createElement('h2', {id: 'child2'}, "yo o honey singh")
);
console.log(element)
ReactDOM.createRoot(saloni).render(element);
