import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ProjectCard from "./ProjectCard";
import colorSharp from "../img/color-sharp2.png";
import projImg1 from "../img/project-img1.png";
import projImg2 from "../img/project-img2.png";
import projImg3 from "../img/project-img3.png";

function Projects(){
   const projects = [
     {
       title: "Weather Dashboard",
       description:
         "A web application that provides real-time weather updates and forecasts for various locations.",
       imageUrl: projImg1,
     },
     {
       title: "E-Commerce Platform",
       description:
         "An online marketplace for buying and selling products, featuring a user-friendly interface and secure payment options.",
       imageUrl:
         "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
     },
     {
       title: "Task Manager",
       description:
         "A productivity tool that helps users organize their tasks, set reminders, and track their progress.",
       imageUrl: projImg2,
     },
     {
       title: "Recipe App",
       description:
         "An application that allows users to search, save, and share their favorite recipes with a vibrant community.",
       imageUrl:
         "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
     },
     {
       title: "Fitness Tracker",
       description:
         "A mobile app that tracks physical activity, monitors health metrics, and provides personalized workout plans.",
       imageUrl: projImg3,
     },
   ];

   const backendprojects = [
     {
       title: "Weather Dashboard",
       description:
         "A web application that provides real-time weather updates and forecasts for various locations.",
       imageUrl: projImg2,
     },
     {
       title: "E-Commerce Platform",
       description:
         "An online marketplace for buying and selling products, featuring a user-friendly interface and secure payment options.",
       imageUrl: projImg1,
     },
     {
       title: "Fitness Tracker",
       description:
         "A mobile app that tracks physical activity, monitors health metrics, and provides personalized workout plans.",
       imageUrl: projImg3,
     },
   ];



    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>projects</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="Frontend">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="Frontend">Frontend Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Backend">Backend projects</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="Frontend">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Backend">
                    <Row>
                      {backendprojects.map((Backendproject, index) => {
                        return <ProjectCard key={index} {...Backendproject} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp} />
      </section>
    );
}

export default Projects;