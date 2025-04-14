import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "1", name: "Test", description: "Test desc", course: "ABC"
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <a id="wd-update-assignment-title"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>

            <input className="form-control w-75" id="wd-assignment-score" type="number"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
            <a id="wd-update-assignment-score"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <br />

            <input className="w-25" id="wd-assignment-completion" type="checkbox" defaultChecked={assignment.completed}
                onChange={(e) =>
                    setAssignment({ ...assignment, completed: e.target.checked })} />
            <br />
            <a id="wd-update-assignment-completion"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/completion/${assignment.completed}`}>
                Update Completion Status
            </a>
            <hr />


            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>

            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>

            <input className="form-control w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <a id="wd-update-module-name"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                Update Module Name
            </a>
            <input className="form-control w-75" id="wd-module-desc"
                defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })} />
            <a id="wd-update-module-desc"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/desc/${module.description}`}>
                Update Module Description
            </a>
            <hr />

        </div>
    );
}
