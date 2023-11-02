

import { Row, Col, Container, Carousel, ProgressBar } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import '../asserts/css/components/techSkills.css'
export const TechSkills = () => {
    const techSkills = [
        {
            category: 'Framworks',
            items: [{

                title: 'React',
                rate: '70',
            }, {
                title: 'Flutter',
                rate: '50',
            },
            {
                title: 'Bootstrap',
                rate: '100',
            },
            {
                title: 'SASS',
                rate: '50',
            },
            ]
        },
        {
            category: 'LANGUEGES',
            items: [{

                title: 'JS',
                rate: '70',
            }, {
                title: 'C++',
                rate: '50',
            },
            {
                title: 'C#',
                rate: '75',
            },
            {
                title: 'Python',
                rate: '25',
            },
            {
                title: 'PHP',
                rate: '50',
            },
            ]
        },
        {
            category: 'TOOLS',
            items: [{

                title: 'VSCode',
                rate: '70',
            }, {
                title: 'Git',
                rate: '50',
            },
            {
                title: 'Githup',
                rate: '50',
            },
            {
                title: 'Gitlab',
                rate: '50',
            },
            ]
        },
    ]


    return (
        <Container id="TechSkills" >
            <Row className='align-items-center my-5'>
                <Col md={4}>
                    <div class="section-title">Tech Skills</div>
                </Col>
                <Col md={8} >
                    <div className="skill-bx primary-color">
                        <Carousel indicators={false} >
                            {techSkills.map((techskill) => {
                                return (
                                    <Carousel.Item>
                                        <Container style={{
                                            padding: '10px 15%',
                                        }}>
                                            <h3>{techskill.category} </h3>
                                            {techskill.items.map(element => {
                                                return (
                                                    <Row className="m-1">
                                                        <Col md={2}>{element.title}</Col>
                                                        <Col md={10}>
                                                            <ProgressBar

                                                                now={element.rate} label={`${element.rate}%`} />
                                                        </Col>
                                                    </Row>
                                                )
                                            })}

                                        </Container>

                                    </Carousel.Item>
                                )
                            })}


                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}