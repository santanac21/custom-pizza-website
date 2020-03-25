import React from 'react';
import Banner from '../Components/Banner';
import PizzaCard from '../Components/PizzaCard';
import {Container, Row, Col} from 'react-bootstrap';
import Pizzas from "../data.json"

function Order() {
    return (
        <React.Fragment>
            <Banner idname="jumbotron-order" header="Order" />
            <Container className="bg-light py-4">
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
        </React.Fragment>
    )
}

export default Order
