import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      <Header text="Web Development Curriculum" course={course[0].name} />
      <Content part={course[0].parts} />
      <Header course={course[1].name} />
      <Content part={course[1].parts} />
    </div>
  );
};
export default Course;
