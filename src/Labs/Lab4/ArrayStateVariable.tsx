import { useState } from "react";
import { Button } from "react-bootstrap";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <Button variant="success" className="mb-3" onClick={addElement}>Add Element</Button>
            <ul className="list-group" style={{ width: "fit-content" }}>
                {array.map((item, index) => (
                    <li className="list-group-item" key={index}>
                        <b>{item}</b>
                        <Button variant="danger" className="ms-5" onClick={() => deleteElement(index)}
                            id="wd-delete-element-click">
                            Delete</Button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
