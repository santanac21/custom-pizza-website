import React, { Component } from 'react';
import {Badge, Button, Card} from 'react-bootstrap';
import Confirmation from './Confirmation';

class PizzaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: false,
            purchase: false
        }
    }

    clickHandler = () =>{
        return(
            this.setState({
                order: true
            })
        );
    }

    hideModel = (cancelOrder)=>{
        if (cancelOrder === true){
            return(
                this.setState({
                    order: false
                })
            );
        }
        else if (cancelOrder === false){
            return(
                this.setState({
                    purchase: true
                })
            );
        }
        
    }

    hidePurchase = ()=> {
        return(
            this.setState({
                order: false,
                purchase:false
            })
        )
    }

    render() {
        const {name,desc,price} = this.props.data;
        const {url} = this.props;
        
        return (
            <React.Fragment> 
                <Card className="rounded shadow-lg border-dark bg-dark text-light" style={{width: '18rem' }}>
                            <Card.Img variant="top" src={url} />
                            <Card.Body className="text-center">
                                <Card.Title>{name}   <Badge pill className="bg-warning text-dark">${price}</Badge></Card.Title>
                                    <Card.Text>
                                    {desc}
                                    </Card.Text>
                                <Button  size="sm" className="bg-warning text-dark font-weight-bold border-0 shadow-none" 
                                onClick={this.clickHandler}>Order Pizza</Button>
                            </Card.Body>
                </Card>

                <Confirmation showOrder={this.state.order} onHideModel={this.hideModel} 
                purchasePizza={this.state.purchase} onHidePurchase={this.hidePurchase} />
            </React.Fragment>
        )
    }
}

export default PizzaCard
