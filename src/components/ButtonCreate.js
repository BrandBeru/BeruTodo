import { TodoContext } from "../TodoContext";
import React from "react";

function ButtonCreate({setOpenModal}) {
    return (
      <button className="CreateTodoButton" onClick={(event)=>{
        setOpenModal(state => !state)
      }}>+</button>
    );
  }

  export {ButtonCreate}