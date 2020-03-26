import React from 'react';
import {Container,Col, Row} from 'react-bootstrap';


function FooterComponent() {
    return (
        <React.Fragment>
            <Container fluid className="bg-dark text-white footer-bottom">
                <Row>
                    <Col className="py-3 px-4 footertext">
                        <h3 className="footertitle pl-5">Opening Hours</h3>
                        <ul>
                            <li>Monday: 12 PM - 10 PM</li>
                            <li>Tuesday: 12 PM - 10 PM</li>
                            <li>Wednesday: 12 PM - 10 PM</li>
                            <li>Thursday: 12 PM - 12 AM</li>
                            <li>Friday: 12 PM - 12 AM</li>
                            <li>Saturday: 12 PM - 1 AM</li>
                            <li>Sunday: 12 PM - 5 PM</li>
                        </ul>
                    </Col>
                    <Col className="py-3 px-4 footertext">
                        <h3 className="footertitle">Locations</h3>
                        <h6 className="footersubtitle">Location One:</h6>
                        <p>
                            87 Dundas Street East, Toronto, Ontario, M9W 2P7
                        </p>
                        <h6 className="footersubtitle">Location Two:</h6>
                        <p>
                            264 University Avenue, Toronto, Ontario, M9W 9X3
                        </p>
                    </Col>
                    <Col className="py-3 px-4 footertext">
                        <h3 className="footertitle">Contact</h3>
                        <p>Phone: (416)- 356 0933</p>
                        <p>Email: customerservice@pizzashack.com</p>
                        <p>Head Office: 
                            2902 Yonge Street, Richmond Hill, Ontario
                        </p>
        
                    </Col>
                </Row>
            </Container>
        <Container fluid className="bg-warning text-dark">
            <Row>
                <Col className="text-center text-normal">
                    <h6>&copy;2020 Carlos' Pizza Shack, LLC. All Rights Reserved.</h6>
                </Col>
            </Row>
        </Container>
        </React.Fragment>
    )
}

export default FooterComponent
