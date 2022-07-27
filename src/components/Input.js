import React from "react";

function Input(props) {
  return (
    <div className="my-4 flex flex-col space-y-2">
      <label>{props.title}</label>
      <input
        type={props.type}
        className="bg-[#d8d8d8] md:w-[414px] md:h-[40px] lg:w-[474px] lg:h-[40px] border-b-2 border-black indent-4  "
        placeholder={props.placeholder}
        onChange={props.onchange}
      />
    </div>
  );
}
export default Input;

export function InputTextArea(props) {
  return (
    <textarea
      className="bg-[#efefef]  p-4"
      rows="10"
      cols="40"
      placeholder={props.placeholder}
      onChange={props.onchange}
    >
      {}
    </textarea>
  );
}
