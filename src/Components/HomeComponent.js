import React, { Component } from 'react';
import {Button,Card,Container, Row, Col,Jumbotron} from 'react-bootstrap';
import {Link} from "react-router-dom";
import PizzaCard from './PizzaCard';
import RewardsImg from "../Images/pizza-rewards.jpg";
import OrderNowImg from "../Images/pizza-order-now.jpg";
import Pizzas from '../data.json';
import "../Custom.css";


class HomeComponent extends Component {

    render() {
        return (
            <React.Fragment>
            <Jumbotron fluid id="jumbotron-custom">
                <Container className="jumbotron-text-custom">
                    <h1>Build Your Own Personal Pizza</h1>
                    <p>
                    Fresh dough made in-house daily. Real ingredients. Cooked to the perfect pizza
                    with the best oven around
                    </p>
                    <p>
                        <Button as={Link} to="/order" 
                        className="bg-warning text-dark border-0 font-weight-bold shadow-none">Order Your Own</Button>
                    </p>
                </Container>
            </Jumbotron>

                <Container className="py-3 rounded">
                    <Container className="pt-3">
                        <Row>
                            <Col sm={6} className="mx-auto mb-3">
                                <Card className="rounded shadow-lg border border-dark bg-dark text-light">
                                    <Card.Img variant="top" src={OrderNowImg} />
                                    <Card.Body className="text-center">
                                    <Card.Title >Grab Your Shack Pizza</Card.Title>
                                        <Card.Text>
                                            Be the hero that your friends deserve and order
                                            the shack's new large shareable pizzas.
                                        </Card.Text>
                                        <Button as={Link} to="/order"
                                        className="bg-warning text-dark font-weight-bold border-0 shadow-none">Start Your Order</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6} className="mx-auto mb-3">
                                <Card className="rounded shadow-lg border-dark bg-dark text-light">
                                    <Card.Img variant="top" src={RewardsImg} />
                                    <Card.Body className="text-center">
                                    <Card.Title >Join Our Rewards!</Card.Title>
                                        <Card.Text>
                                            Jump in and get free stuff like pizzas, desserts, and drinks. 
                                            The let FOMO get to you.
                                            
                                        </Card.Text>
                                        <Button as={Link} to="/rewards" className="bg-warning text-dark font-weight-bold border-0 shadow-none">Hook Me Up!</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="bg-light">
                        <Row>
                            {Pizzas.map((pizza)=>{
                                return(
                                    <Col key={pizza.id} xs={12} sm={6} md={4}  className="d-flex my-3 justify-content-around">
                                        <PizzaCard data={pizza} url={require('../Images/' + pizza.image)} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}

export default HomeComponent
