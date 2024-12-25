import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.lifewire.com/thmb/KtrqdwaAPUy5iOlxUMGuoGlkG_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/imdb-movie-trailers-b5e3171c14f54f8abb6e7b9fb0802ae6.png"}
              isBlog={false}
              title="Movie Website"
              description="A Movie Website built in React.js is a dynamic web application that provides users with information about movies. It can include features like movie browsing, searching, and detailed views with additional functionalities such as reviews, ratings, or trailers."
              ghLink="https://github.com/tej0517/Movie_Website_React-js"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Student-Management-System.webp?fit=640%2C427&ssl=1"}
              isBlog={false}
              title="Student_Info_System"
              description="A Student Management System is a software application designed to streamline and automate the administrative and academic tasks associated with managing students in educational institutions. "
              ghLink="https://github.com/tej0517/Student_Management_System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://miro.medium.com/v2/resize:fit:1400/1*Rz-2ufGoJ5vZZPjML357eA.jpeg"}
              isBlog={false}
              title="Bank_System"
              description="The Bank Management System is a robust application designed to facilitate and automate core banking operations such as account management, transaction processing, loan management, and customer services. It enhances operational efficiency, ensures data accuracy."
              ghLink="https://github.com/tej0517/Bank_Management_System"
                            
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://uizard.io/static/944912118a10f78746e046933be64945/a8e47/57cb6160fb1aa8d95422f8a01ff0a7e11191285a-1440x835.png"}
              isBlog={false}
              title=" Bank page Using_React"
              description="Developed a simple banking interface using React to display account details, transaction history, and basic banking functionalities Implemented responsive design for an intuitive user experience."
              ghLink="https://github.com/tej0517/Bank-page-React-Js"
              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
