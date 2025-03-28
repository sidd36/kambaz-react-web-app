import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enroll, enrollmentToggle, unEnroll } from "./reducer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrollmentButtonStatus, setEnrollmentButtonStatus] = useState(false);
  const { enrollmentClicked, enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-dashboard">
      <div>
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser.role === "STUDENT" &&
          <Button variant="primary" className="float-end" style={{ marginTop: "-3rem" }} onClick={() => { dispatch(enrollmentToggle(!enrollmentButtonStatus)); setEnrollmentButtonStatus(!enrollmentButtonStatus) }}>Enrollments</Button>
        }
      </div>
      <hr />
      {currentUser.role === "FACULTY" &&
        <div>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </div>
      }
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {
            courses
              .filter((c) => {
                if (!enrollmentClicked) {
                  return enrollments.some(
                    (enrollment: { user: any; course: any; }) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === c._id
                  )
                } else {
                  return c;
                }
              }
              )
              .map((course: any) => (
                <Col className="wd-dashboard-course" style={{ width: "300px", height: "430px" }}>
                  <Card style={{ height: "100%" }}>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src={course.img} width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary" style={{
                          position: "absolute",
                          bottom: "10px"
                        }}> Go </button>
                        {currentUser.role === "FACULTY" &&
                          <span>
                            <button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                left: "130px"
                              }}>
                              Edit
                            </button>

                            <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                left: "190px"
                              }}
                              id="wd-delete-course-click">
                              Delete
                            </button>
                          </span>
                        }

                        {currentUser.role === "STUDENT" &&
                          <span>
                            {enrollments.find((e: any) => e.course === course._id && e.user === currentUser._id) === undefined &&
                              <button id="wd-enroll-course-click"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(enroll({ _id: uuidv4(), user: currentUser._id, course: course._id }))
                                }}
                                className="btn btn-success me-2 float-end"
                                style={{
                                  position: "absolute",
                                  bottom: "10px",
                                  left: "190px"
                                }}>
                                Enroll
                              </button>
                            }
                            {enrollments.find((e: any) => e.course === course._id && e.user === currentUser._id) &&
                              <button id="wd-unenroll-course-click"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(unEnroll({ course: course._id, user: currentUser._id }));
                                }}
                                className="btn btn-danger float-end"
                                style={{
                                  position: "absolute",
                                  bottom: "10px",
                                  left: "170px"
                                }}>
                                Unenroll
                              </button>
                            }
                          </span>
                        }
                      </div>
                    </Link>
                  </Card>
                </Col>
              ))}
        </Row>
      </div>
    </div>
  );
}
