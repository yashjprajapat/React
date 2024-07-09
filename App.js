const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, ["React",
    React.createElement("p",{id:"heading2"}, "Redux")]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);