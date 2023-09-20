import React from "react"
import { TodoContext } from "../TodoContext"

function Counter() {
    const {totalTodos, completedTodos,} = React.useContext(TodoContext)
    return (
        <span className="counter-text">Has completado <span className="complement">{completedTodos}</span> de <span className="complement">{totalTodos}</span> tareas</span>
    )
}

export {Counter}