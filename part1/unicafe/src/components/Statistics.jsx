import React from "react";

const Statistics = (props) => {
  return (
    <div className="Statistics">
      <table>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </table>
    </div>
  );
};

export default Statistics;
