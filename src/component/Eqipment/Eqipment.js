
import React from 'react';
import { Col } from 'react-bootstrap';

const Eqipment = (props) => {
    console.log(props);
    const {subject, about, price, img} =props.homeService
    return (
                <div className="col-md-6">
                <Col className="my-4">
                 <div class="card mb-3" style={{maxWidth: "540px"}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{subject}</h5>
                            <h4>Price:{price}$</h4>
                            <p class="card-text">{about.slice(1,200)}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                 </Col>
                </div>
    );
};

export default Eqipment;