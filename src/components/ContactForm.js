
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
export default () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setButtonText("Sending...");
        setTimeout(() => {
            setButtonText("Send");
        }, 5000);

        let result = 'done';// await response.json();
        setFormDetails(formInitialDetails);

    };
    return (
        <>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>

                        <button type="submit">
                            <a href="mailto:dimakassem296@gmail.com?
&subject=The%20subject%20of%20the%20email
&body=The%20body%20of%20the%20email">
                                {buttonText}</a>
                        </button>
                    </Col>
                    {
                        status.message &&
                        <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                    }
                </Row>
            </form>
        </>
    )
}