import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
export default function TodoList() {
    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group" style={{ width: "fit-content" }}>
                <TodoForm />
                <TodoItem />
            </ul>
            <hr />
        </div>
    );
}
