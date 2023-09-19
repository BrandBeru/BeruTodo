import React from "react"
import { TodoContext } from "../TodoContext"

function Counter() {
    const {totalTodos, completedTodos,} = React.useContext(TodoContext)
    return (
        <h1>Has completado {completedTodos} de {totalTodos} tareas</h1>
    )
}

export {Counter}