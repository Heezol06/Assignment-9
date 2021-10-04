import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleService = (props) => {
    const {subject, about, price, img} =props.service
    return (
            <div className="col-md-6">
                <Col className="my-4">
                    <Card>
                        <img src={img}className="h-75" alt="" srcset="" />
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

export default SingleService;