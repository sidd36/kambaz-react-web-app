import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
export default function TOC() {
  const { pathname } = useLocation();
 return (
   <Nav variant="pills" id="wd-toc">
     <Nav.Item>
       <Nav.Link id="wd-a" href="#/Labs">Labs</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link id="wd-a1" href="#/Labs/Lab1" className={`${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link id="wd-a2" href="#/Labs/Lab2" className={`${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link id="wd-a3" href="#/Labs/Lab3" className={`${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link id="wd-a4" href="#/Labs/Lab4" className={`${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link id="wd-k" href="#/Kambaz">Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link className="github" id="wd-github" target="_blank" href="https://github.com/sidd36/kambaz-react-web-app">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>
);}

