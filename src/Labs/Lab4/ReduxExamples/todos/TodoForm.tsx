import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <Button variant="success" className="me-1 float-end" onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </Button>
            <Button variant="warning" className="me-1 ms-5 float-end" onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"> Update </Button>
            <input value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
        </li>
    );
}