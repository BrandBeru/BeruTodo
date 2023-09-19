import { useState } from "react";

import {FaCheckSquare, FaCheck} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

function Item(props) {
    return (
      <li>
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>{props.completed ? <FaCheckSquare /> : <FaCheck />}</span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Icon Icon-delete" onClick={props.deleteTodo}><AiFillCloseCircle /></span>
      </li>
    );
  }

  export {Item}