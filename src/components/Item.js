import { useState } from "react";

import {BsCircle, BsCircleFill} from 'react-icons/bs'
import { RiDeleteBin4Line} from 'react-icons/ri'

function Item(props) {
    return (
      <li>
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>{props.completed ? <BsCircleFill /> : <BsCircle />}</span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Icon Icon-delete" onClick={props.deleteTodo}><RiDeleteBin4Line /></span>
      </li>
    );
  }

  export {Item}