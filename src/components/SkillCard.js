import { Col, Row } from "react-bootstrap";
export default (props) => {
    const { Icon, title, desc } = props;

    return (
        <Col md={4} className="skillCard justify-content-center p-3 primary-color" >

           
<div className="d-flex align-items-center">
   
     <Icon style={{fontSize:'50px'}} className="mb-16 secondary-color" /> 
     <h3 className="ms-1">{title}</h3>
</div>
           
            <p>
                {desc} </p>

        </Col>
    )
}