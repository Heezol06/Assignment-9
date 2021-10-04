
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Eqipment = (props) => {
    console.log(props);
    const {subject, about, price, img} =props.homeService
    return (
                <div className="col-md-6">
                <Col className="my-4">
                    <Card>
                        <Card.Img variant="top" src={img} className="h-25"/>
                        <Card.Body>
                        <Card.Title>{subject}</Card.Title>
                        <h4>Price:{price}$</h4>
                        <Card.Text>
                            {about.slice(1,400)}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                 </Col>
                </div>
    );
};

export default Eqipment;