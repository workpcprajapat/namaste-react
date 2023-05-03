const layout = React.createElement("div", { id: "main" }, [
  React.createElement("div", { className: "child1" }, [
    React.createElement("h1", {}, "This is H1 inside child 1"),
    React.createElement("h2", {}, "This is H1 inside child 1"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", {}, "This is H1 inside child 2"),
    React.createElement("h2", {}, "This is H2 inside child 2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(layout); // render the layout object in understandable form for browser

// console.log(layout); layout is a object
