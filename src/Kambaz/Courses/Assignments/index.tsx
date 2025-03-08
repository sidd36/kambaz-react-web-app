import { Button, FormControl, FormGroup, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assgns = assignments.filter(a => a.course === cid);
  return (
    <div id="wd-assignments">
      <div style={{ display: "flex" }}>
        <FormGroup className="w-50" controlId="wd-assignment-search">
          <InputGroup style={{ width: "fit-content" }}>
            <InputGroup.Text> <HiMagnifyingGlass /> </InputGroup.Text>
            <FormControl type="text" placeholder="Search..." />
          </InputGroup>
        </FormGroup>
      </div>
      <div style={{ marginTop: "-37px" }}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
        <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>
      </div>
      <br /><br /><br /><br />
      <ListGroup className="rounded-0">
        <ListGroup.Item className="p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title" className="p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <div className="float-end">
              <span className="wd-assignment-weight"><span className="wd-assignment-weight-val">40% of Total</span> <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /></span><IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="wd-assignment-list rounded-0">
            {
              assgns.map(assgn => (
                <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditDocument style={{ color: "green" }} />
                  <a href={`#/Kambaz/Courses/${cid}/Assignments/${assgn._id}`}
                    className="wd-assignment-link" >
                    {assgn._id} - {assgn.title} <br />
                  </a>
                  <LessonControlButtons />
                  <div className="wd-assignment-modules">
                    <span className="wd-assignment-modules-red">Multiple Modules</span> | <b>Not available until</b> {assgn.availableDt} at {assgn.availableTime} | <br />
                    <b>Due</b> {assgn.dueDt} at {assgn.dueTime} | {assgn.points} pts
                  </div>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
