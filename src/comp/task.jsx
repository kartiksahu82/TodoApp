import React from "react";
import Item from "./item";

function Task({ value,onDeleteClick }) {
  return (
    <div className="">
      {value.map((item) => (
        <Item onDeleteClick={onDeleteClick} name={item.name} date={item.time} />
      ))}
    </div>
  );
}

export default Task;
