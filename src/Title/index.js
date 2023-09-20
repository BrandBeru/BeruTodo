import { Counter } from "../components/Counter"

function Title(){
    return (
        <div className="title-container">
            <span className="title">Welcome, User!</span>
            <Counter />
        </div>
    )
}
export {Title}