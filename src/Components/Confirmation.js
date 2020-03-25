import React from 'react';
import {Button, Modal} from 'react-bootstrap';


function Confirmation(props) {
    const {showOrder, onHideModel, purchasePizza, onHidePurchase} = props; 
    if (purchasePizza === false && showOrder === true){
        return(
            <div>
                <Modal show={showOrder} onHide={()=>onHideModel(true)} animation = {true}>
                    <Modal.Header closeButton className="bg-dark text-light">
                        <Modal.Title>Ordering Pizza</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-warning text-dark font-weight-bold">
                        Would you like to continue with this order?
                    </Modal.Body>
                    <Modal.Footer className="bg-dark">
                        <Button className="bg-warning text-dark font-weight-bold border-0 shadow-none" 
                        onClick={()=>onHideModel(false)}>Yes</Button>
                        <Button className="bg-warning text-dark font-weight-bold border-0 shadow-none" 
                        onClick={()=>onHideModel(true)}>Cancel Order</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );


    }
    else{
                return(
                    <div>
                        <Modal show={purchasePizza} onHide={onHidePurchase} animation = {false}>
                            <Modal.Header closeButton className="bg-dark text-light">
                                <Modal.Title>Thank you for the purchase!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="bg-warning text-dark font-weight-bold">
                                Your pizza will be ready in 20 minutes.
                            </Modal.Body>
                        </Modal>
                    </div>
                );
    }
 
}

export default Confirmation
