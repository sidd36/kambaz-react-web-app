import { Col, Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const assignment = assignments.filter(a => a._id === aid)
  return (
    assignment.map(assgn => (
      <Container id="wd-assignments-editor">
        <FormGroup className="mb-3" controlId="wd-assignment-name">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl type="text" value={`${assgn._id} - ${assgn.title}`} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-assignment-description">
          <FormControl as="textarea" style={{ height: "120px" }}
            value={"The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section links to each of the lab assignments Link to the Kambaz application Links to all relevant source code repositories The Kambaz application should include a link to navigate back to the landing page."} />
        </FormGroup>
        <Container>
          <Row>
            <Col>
              <FormGroup className="mb-3 d-flex align-items-center" controlId="wd-points">
                <FormLabel column sm={2} className="me-2 ms-5 mb-0" >Points</FormLabel>
                <FormControl type="text" value={assgn.points} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup className="mb-3 d-flex flex-nowrap align-items-center" controlId="wd-group">
                <FormLabel column sm={2} className="me-2 ms-5 mb-0" style={{ whiteSpace: "nowrap" }}>Assignment Group</FormLabel>
                <FormSelect style={{ width: "auto" }}>
                  <option selected>ASSIGNMENTS</option>
                </FormSelect>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup className="mb-3 d-flex flex-nowrap align-items-center" controlId="wd-display-grade-as">
                <FormLabel column sm={2} className="me-2 ms-5 mb-0" style={{ whiteSpace: "nowrap" }}>Display Grade as</FormLabel>
                <FormSelect style={{ width: "auto" }}>
                  <option selected>Percentage</option>
                </FormSelect>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup className="mb-3 d-flex flex-nowrap" controlId="wd-submission-type">
                <FormLabel column sm={2} className="me-2 ms-5 mb-0" style={{ whiteSpace: "nowrap" }}>Submission Type</FormLabel>
                <div className="wd-assignment-editor-group">
                  <FormSelect>
                    <option selected>Online</option>
                  </FormSelect><br />
                  <label style={{ fontWeight: "bold" }}>Online Entry Options</label><br />
                  <Form.Check name="online-opts" id="wd-text-entry" label="Text Entry" />
                  <Form.Check name="online-opts" id="wd-website-url" label="Website URL" />
                  <Form.Check name="online-opts" id="wd-media-recordings" label="Media Recordings" />
                  <Form.Check name="online-opts" id="wd-student-annotation" label="Student Annotation" />
                  <Form.Check name="online-opts" id="wd-file-upload" label="File Uploads" />
                </div>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup className="mb-3 d-flex flex-nowrap" controlId="wd-assign-to">
                <FormLabel column sm={2} className="me-2 ms-5 mb-0">Assign</FormLabel>
                <div className="wd-assignment-editor-group">
                  <FormGroup className="mb-3" controlId="wd-assign-to">
                    <FormLabel>Assign to</FormLabel>
                    <FormControl type="text" value={"Everyone"} />
                  </FormGroup>
                  <FormGroup className="mb-3" controlId="wd-due-date">
                    <FormLabel>Due</FormLabel>
                    <FormControl type="date" value={convertDate(assgn.dueDt)} />
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup className="mb-3" controlId="wd-available-from">
                        <FormLabel>Available from</FormLabel>
                        <FormControl type="date" value={convertDate(assgn.availableDt)} />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup className="mb-3" controlId="wd-available-until">
                        <FormLabel>Until</FormLabel>
                        <FormControl type="date" value={convertDate(assgn.untilDt)} />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Link key={"cancel"} to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
          <Link key={"save"} to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
        </div>
      </Container>
    ))
  );
}

function convertDate(dateString: string | undefined) {
  if (dateString) {
    const date = new Date(dateString);
    return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + String(date.getDate()).padStart(2, '0');
  }
}
