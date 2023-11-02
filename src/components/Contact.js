
import { Container, Row, Col } from "react-bootstrap";
import "../asserts/css/components/contact.css";
import TrackVisibility from 'react-on-screen';
import ContactForm from "./ContactForm";

export const Contact = () => {


  return (
      <Container id="connect" className="contact" >
        <section class="hero hero--contact slide animated fadeIn">

	<div class="wrapper">

		<div class="text-center w-50 m-auto">
            <p class="title-eyebrow opacity-50">What’s in your mind?</p>
            <h1 class="page-h2">Let’s talk about&nbsp;you</h1>

            <p class="content-lead opacity-80">If you have a project in mind or you just want to chat, feel free to get in touch. Currently my time books quickly, so the sooner you write, the better it is for both&nbsp;of&nbsp;us.</p>

            <div class="estimate-indicator estimate-indicator--reply">
                <div class="estimate-indicator--circle indicator--green-gradient"></div>
                <p><strong>Reply time:</strong>  within 1-2 working day</p>
            </div>

            <a href="mailto:dimakassemse@gmail.com" class="button">dimakassemse@gmail.com</a>

        </div>

	</div>

</section>
      </Container>

  )
}