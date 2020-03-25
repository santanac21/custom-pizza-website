import React from 'react';
import Banner from '../Components/Banner';
import {Container, Row, Col, Image} from 'react-bootstrap'
import aboutOne from '../Images/about-1.jpg';
import aboutTwo from '../Images/about-2.jpg';
import aboutThree from '../Images/about-3.jpg';
function About() {
    return (
        <React.Fragment>
           <Banner idname="jumbotron-about" header="About"/>
            <Container className="bg-light text-dark font-weight py-5">
                <Row className="justify-content-center my-2">
                    <Col xs={10} sm={10} md={6} lg={5}>
                        <Image src={aboutOne} thumbnail />
                    </Col>
                        
                    <Col xs={10} sm={10} md={6} lg={6} className=" py-3">           
                         <h5>What Is Carlos' Pizza Shack?</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                           
                            </p>
                    </Col>
                </Row>

                <Row className="justify-content-center my-2">
                    <Col xs={10} sm={10} md={6} lg={5}>
                        <Image src={aboutTwo} thumbnail />
                    </Col>
                    <Col xs={10} sm={10} md={6} lg={6} className="py-3">          
                         <h5>We Use The Freshiest Ingredients</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                           
                            </p>
                    </Col>
                </Row>

                <Row className="justify-content-center my-2">
                    <Col xs={10} sm={10} md={6} lg={5}>
                        <Image src={aboutThree} thumbnail />
                    </Col>
                        
                    <Col xs={10} sm={10} md={6} lg={6} className="py-3">          
                         <h5>We Are Located In Heart Of Toronto</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                           
                            </p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default About
