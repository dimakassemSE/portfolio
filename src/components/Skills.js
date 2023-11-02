import { Container, Row } from "react-bootstrap";
import { Code, DeveloperMode, Brush, ViewQuilt, Diversity1, Reorder, Visibility } from '@mui/icons-material';

import SkillCard from "../components/SkillCard";
import TrackVisibility from "react-on-screen";

const skills = [{
    icon: Code,
    title: 'Web Development ',
    desc: 'build website, Integrating APIs , Implementation Data Management , Synchronization , Ensure Optimal  Performance Across Devices , Handling Authentication And Authorization And Managing  Data Synchronization',
}, {
    icon: DeveloperMode,
    title: 'App Development ',
    desc: ' Developing And Implementation Mobile App Using Flutter',
}, {
    icon: Brush,
    title: 'Web Design ',
    desc: 'Translate Design Specifications To Real App ',
}, {
    icon: ViewQuilt,
    title: 'Responsive Design',
    desc: 'Designing , Developing And Implementation Web App Using React ',
}, {
    icon: Reorder,
    title: 'Organization',
    desc: 'Build App In Clear Structure To Make Update And Develop It Easier And Faster Also Write Clean Code',
},
{
    icon: Diversity1,
    title: 'Commenications',
    desc: 'Collaborating With Team , Quick Learn And Searching What Is New? , Good Communication Skills , Work Under Pressure  ',
}]

export const Skills = () => {
    return (
        <Container class="section-vh " id="skills" >
            <TrackVisibility>
                {({ isVisible }) =>
                    <div>
                        <h2 className={`section-title  t-center`}> Skills</h2>
                        <div id="animate__flip" className={isVisible ? "animate__animated animate__flip" : ""}>
                            <Row className={`justify-content-center p-3 `}
                            >
                                {skills.map(element => {
                                    return (<SkillCard Icon={element.icon} title={element.title} desc={element.desc} />
                                    )
                                })}
                            </Row>
                        </div>

                    </div>

                }
            </TrackVisibility>
        </Container >

    );
}