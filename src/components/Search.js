import React from "react"
import { TodoContext } from "../TodoContext"

function Search(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return(
      <input value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value)
      }} className="TodoSearch" placeholder="Insert TODO" />
    )
  }

  export {Search}