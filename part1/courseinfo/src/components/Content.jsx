import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part name={props.list[0].name} number={props.list[0].exercise1} />
      <Part name={props.list[1].name} number={props.list[1].exercise1} />
      <Part name={props.list[2].name} number={props.list[2].exercise1} />
    </div>
  );
};

export default Content;
