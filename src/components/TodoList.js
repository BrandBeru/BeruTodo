function TodoList(props) {
  return (
    <div className="list-container">
      <ul>
        <span className="message-list">Tu lista de tareas</span>
        {props.children}
      </ul>
    </div>
  )
}

export { TodoList }