import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import "../Custom.css"

function Banner(props) {
    return (
        <React.Fragment>
             <Jumbotron fluid id={props.idname}>
                <Container className="jumbotron-text-custom">
                    <h1>{props.header}</h1>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Banner
