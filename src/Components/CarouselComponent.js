import React from 'react';
import {Carousel, Button, Container,Row,Col} from 'react-bootstrap';
import PizzaCar1 from "../Images/pizza-car1.jpg";
import PizzaCar2 from "../Images/pizza-car2.jpg";
import PizzaCar3 from "../Images/pizza-car3.jpg";


function CarouselComponent() {
    return (
        <div>
        
        <Container  className="bg-light">
             <Row>
                        <Col sm={12} lg={10}className="mx-auto">
                            <Carousel className="rounded font-weight-bold">
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 rounded"
                                    src={PizzaCar1}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption className="font-italic">
                                    <h3>Build Your Own Pizza</h3>
                                    <p>Fresh dough made-in house daily.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 rounded"
                                    src={PizzaCar2}
                                    alt="Third slide"
                                    
                                    />

                                    <Carousel.Caption className="font-italic">
                                    <h3>Authentic Pizza</h3>
                                    <p>Cooked to perfection in our blazin' hot oven.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 rounded"
                                    src={PizzaCar3}
                                    alt="Third slide"
                                    
                                    />

                                    <Carousel.Caption className="font-italic">
                                    <h3>Enjoy With Others</h3>
                                    <p>Be the hero your crew deserves and order our large shareable pizzas.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            </Col>
                        </Row>
         </Container>
        </div>
    )
}

export default CarouselComponent
