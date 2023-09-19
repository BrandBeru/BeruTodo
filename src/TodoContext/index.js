import React from "react";
import useLocalStorage from "../utils/useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length;

    const searcherTodos = todos.filter((todo) => {
        return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })

    const changeTodo = (text) => {
        const newTodos = [...todos]
        console.log(newTodos)   
        const index = newTodos.findIndex((todo) => todo.text == text)
        newTodos[index].completed = !newTodos[index].completed
        saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex((todo) => todo.text == text)
        newTodos.splice(index, 1)
        saveTodos(newTodos)
    }
    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false
        })
        saveTodos(newTodos)
    }
    

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            loading,
            error,
            searcherTodos,
            changeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }