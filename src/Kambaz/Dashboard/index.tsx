import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title>
                  <Card.Text className="wd-dashboard-course-description"> Full Stack software developer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/java.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5678 Java </Card.Title>
                  <Card.Text className="wd-dashboard-course-description"> Full Stack software developer </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/angular.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1324 Angular </Card.Title>
                  <Card.Text className="wd-dashboard-course-description"> Full Stack software developer </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/dbms.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS4539 DBMS </Card.Title>
                  <Card.Text className="wd-dashboard-course-description"> Full Stack software developer </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/ml.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS2479 Machine Learning </Card.Title>
                  <Card.Text className="wd-dashboard-course-description"> Full Stack software developer </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/nlp.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS9823 NLP </Card.Title>
                  <Card.Text className="wd-dashboard-course-description"> Full Stack software developer </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/cloud.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS3409 Cloud Computing </Card.Title>
                  <Card.Text className="wd-dashboard-course-description"> Full Stack software developer </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
