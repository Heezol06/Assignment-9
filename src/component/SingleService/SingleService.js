import React from 'react';
import { Col } from 'react-bootstrap';

const SingleService = (props) => {
    const {subject, about, price, img} =props.service
    return (
            <div className="col-md-6">
                <Col className="my-4">
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{subject}</h5>
        <h4>Price:{price}$</h4>
        <p className="card-text">{about.slice(1,200)}</p>
        <button className="btn text-light" style={{backgroundColor: "#ec407a"}}>Purchase</button>
      </div>
    </div>
  </div>
</div>
                 </Col>
                </div>
    );
};

export default SingleService;