import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../../src/asserts/css/components/bannar.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Softwear Engineer", "Frontend Developer", "React Developer", "Flutter Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Container id='home' className="banner section-vh primary-color">       
           <TrackVisibility>
          {({ isVisible }) =>
            <Row
              className={`${isVisible ? "animate__animated animate__fadeIn" : ""} align-items-center`}
            >
 <Col xs={12} md={{span: 6, offset: 2}} lg={{span: 6, offset:0}}>
  <h1 className={isVisible ? "animate__animated animate__backInDown section-title" : "section-title"}>Hi! I'm Dima Kassem</h1>
              <h2>
                <span className="txt-rotate"
                  dataPeriod="100" data-rotate='[  "Softwear Engineer", "Frontend Developer" , "React Developer" , "Flutter Developer"]'
                >
                  <span className="wrap">
                    {text}
                  </span>
                </span>
              </h2>
              <p> Softwear Engineer | Frontend Web Developer | Experienced with Flutter and React</p>

              </Col>
              <Col className="mt-5 d-flex justify-content-center" xs={12} md={{span: 6, offset: 2}} lg={{span: 6, offset:0}}>
              <img className="banner-img" src={ require("../asserts/img/banner-side.png")}></img>
              </Col>
            </Row>
          }
        </TrackVisibility>
    
     

     
    </Container>

  )
}