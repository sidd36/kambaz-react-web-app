import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
        placeholder="username"
        defaultValue="alice"
        className="mb-2" />
      <Form.Control id="wd-password"
        defaultValue="123"
        placeholder="password" type="password"
        className="mb-2" />
      <Form.Control id="wd-firstname"
        placeholder="First Name"
        defaultValue="Alice"
        className="mb-2" />
      <Form.Control id="wd-lastname"
        placeholder="Last Name"
        defaultValue="Wonderland"
        className="mb-2" />
      <Form.Control id="wd-dob"
        type="date"
        defaultValue="2000-01-01"
        className="mb-2" />
      <Form.Control id="wd-email"
        type="email"
        defaultValue="alice@wonderland"
        className="mb-2" />
      <Form.Select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Select>
      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mt-2 mb-2">Sign out</Link>
    </div>
  );
}
