import React from "react"
import { TodoContext } from "../TodoContext"

function Search() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="search-container">
      <input type="search" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value)
      }} className="TodoSearch" placeholder="Buscar TODO" />
    </div>
  )
}

export { Search }