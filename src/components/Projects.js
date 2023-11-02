import { Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import '../asserts/css/components/project.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            category: 'FRONTEND PROJECTS',
            items: [
                {
                    title: "Landing Page",
                    description: "Using Html & Css Only",
                    imgUrl: require("../asserts/img/landingPage.png"),
                    projectLink: 'https://dimakassem.github.io/landing-page/',
                    githupLink: 'https://github.com/dimaKassem/landing-page'
                },
                {
                    title: "SpecialDesignCompany",
                    description: "Using Html Css Javascript",
                    imgUrl: require("../asserts/img/specialDesignCompany.png"),
                    projectLink: 'https://dimakassem.github.io/SpecialDesignCompany/',
                    githupLink: 'https://github.com/dimaKassem/SpecialDesignCompany'
                },
                {
                    title: "Kasper Company",
                    description: "Using Html Css",
                    imgUrl: require("../asserts/img/kasper.png"),
                    projectLink: 'https://dimakassemse.github.io/kasper/',
                    githupLink: 'https://github.com/dimakassemSE/kasper'
                },
                {
                    title: "Movies",
                    description: "Using Html Css Javascript JQuery Bootstrap",
                    imgUrl: require("../asserts/img/movies.png"),
                    projectLink: 'https://dimakassemse.github.io/movies/',
                    githupLink: 'https://github.com/dimakassemSE/movies'
                }
            ]
        },
        {
            category: 'FLUTTER PROJECTS',
            items: [
                {
                    title: "BMI Calculator",
                    description: "Using Flutter",
                    imgUrl: require("../asserts/img/BMIApp.png"),
                },
                {
                    title: "Trello App",
                    description: "Using Flutter",
                    imgUrl: require("../asserts/img/TrelloApp.png"),
                },
                {
                    title: "Quiz App",
                    description: "Using Flutter",
                    imgUrl: require("../asserts/img/QuizApp.png"),
                },
            ]
        }, {
            category: 'REACT PROJECTS',
            items: [
                {
                    title: "Proto-Folio",
                    description: "Using React & BootStrap",
                    imgUrl: require("../asserts/img/protoFolio.png"),
                    projectLink: 'https://dimakassem.github.io/proto-folio/',
                    githupLink: 'https://github.com/dimaKassem/proto-folio'
                }
            ]
        }
    ];

    return (
        <Container id="projects">
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        
                        <Tab.Container id="projects-tabs" defaultActiveKey="0">
                            <Nav variant="pills" className="project align-items-center flex-column flex-md-row justify-content-evenly " id="pills-tab">
                                <h2 className="section-title">Projects</h2>
                                {projects.map((project, index) => {
                                    return (
                                        <Nav.Item size={12} md={4} >
                                            <Nav.Link eventKey={index}>{project.category}</Nav.Link>
                                        </Nav.Item>
                                    )
                                })}
                            </Nav>
                            <Tab.Content id="slideInUp"
                                className={isVisible ? "animate__animated animate__slideInUp" : ""}
                            >
                                {projects.map((project, index) => {
                                    return (
                                        <Tab.Pane eventKey={index}>
                                            <Row className="justify-content-evenly gap-3">
                                                {
                                                    project.items.map((item, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...item}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    )
                                })}
                            </Tab.Content>
                        </Tab.Container>
                    </div>}
            </TrackVisibility>

        </Container>

    )
}