import React, { useState } from "react";
import Todoitem from "./comp/todoitem";
import Task from "./comp/task";
import "./App.css";
import "./comp/Welcomemessage";
import Welcomemessage from "./comp/Welcomemessage";
function App() {
  const item = [
    { name: "morning", time: "6.00" },
    { name: "afterorning", time: "6.00" },
  ];

  const [value, change] = useState([]);

  const handleclick = (itemname, itemdate) => {
    console.log(
      `Your Task ${itemname} has beed added on the time of ${itemdate}`
    );

    const newtodo = [...value, { name: itemname, time: itemdate }];

    change(newtodo);
  };

 const onDeleteClick=(todoname)=>{
  const newtodo=value.filter((elm)=>elm.name!=todoname)
  change(newtodo)
 }
  // const [value, change] = useState([item]);

  // const handleclick = (itemname, itemdate) => {
  //   console.log(`The due date is ${itemname} and date is ${itemdate}`);

  //   constpointer;wtodo = [...value, { name: itemname, time: itemdate}];

  //   change(newtodo);
  // };

  return (
    <div className="main bg-black">
      <h1 className="name">
        Todo App
      </h1>

      <div className="cont">
        <Todoitem hn={handleclick} />
      </div>
      <Task onDeleteClick={onDeleteClick} value={value} />
      {value.length === 0 && <Welcomemessage />}
    </div>
  );
}

export default App;
