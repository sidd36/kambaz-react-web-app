import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        todos.map((todo: any) => (
            <li key={todo.id} className="list-group-item">
                <Button variant="danger" className="me-1 float-end" onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"> Delete </Button>
                <Button variant="primary" className="me-1 ms-3 float-end" onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"> Edit </Button>
                {todo.title}    </li>)
        )
    );
}