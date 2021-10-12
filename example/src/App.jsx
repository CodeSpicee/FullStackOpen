import React from "react";
import Hello from "./components/Hello";

const App = () => {
  console.log("Hello from component");
  const name = "Ajala";
  const age = "30";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Jamiu" age={10 + 50} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
