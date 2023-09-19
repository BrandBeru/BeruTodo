import React from "react"

import "./style.css"
import { TodoContext } from "../TodoContext"

function Form(){
    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [name, setName] = React.useState('')
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setName(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(name)
        setOpenModal(false)
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Texto del nuevo TODO" onChange={onChange} value={name} />
            <div className="button-container">
                <button className="cancel-btn" type="button" onClick={onCancel}>Cancelar</button>
                <button className="create-btn" type="submit">Añadir</button>
            </div>
        </form>
    )
}

export {Form}