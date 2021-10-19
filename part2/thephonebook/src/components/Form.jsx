import React from "react";

const Form = ({ onSubmit, value, value1, onChange, onChange1, text }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="Form">
        <div>
          Name:
          <input value={value} onChange={onChange} />
        </div>
        <div>
          Number: <input value={value1} onChange={onChange1} />
        </div>
        <button type="submit">{text}</button>
      </form>
    </div>
  );
};

export default Form;
