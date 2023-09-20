import React from "react"

import "./style.css"
import { TodoContext } from "../TodoContext"
import {GrFormClose} from 'react-icons/gr'

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
            <span className="form-title">Nombre de tarea</span>
            <div className="button-container">
                <input onChange={onChange} value={name} />
                <button className="create-btn" type="submit">Hecho</button>
            </div>
            <button className="cancel-btn" type="button" onClick={onCancel}> <GrFormClose /> </button>
        </form>
    )
}

export {Form}