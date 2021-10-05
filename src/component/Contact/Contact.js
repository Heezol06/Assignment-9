import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="row my-5">
                    <div className="container">
                        <h4 className="title" style={{textDecoration: "underline"}}>Contact Details.</h4>
                        <div className="d-flex container my-5 p-5 rounded-pill" style={{backgroundColor: "#FEF1E6"}}>
                        <div className="" >
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>Address: Tejgaon-1215-7rasta,more</p>
                        </div>
                        <div>
                        <i class="far fa-envelope fa-2x"></i>
                        <p>Email: Shahriar0123@example.com</p>
                        </div>
                        <div>
                        <i class="fas fa-phone fa-2x"></i>
                        <p>Phone: 01734455492</p>
                        </div>
                        <div>
                        <i class="fab fa-facebook-f fa-2x"></i>
                        <p>Facebook: facebook.com/learn-photography</p>
                        </div>
                        <div>
                        <i class="fab fa-twitter fa-2x"></i>
                        <p>Twiter: Learn Photography</p>
                        </div>
                        </div>
                        </div>
                    <div className="container ms-5 p-5 ps-4">
                        <p>
                            Fell free to come oure office and visite oure office. oure office is nare hatirjeel you can watch a nice view from our palace. If you want to join our offline class then definetly come and visite oure classes. Oure office is on from friday to Thursday. if you want to join with us by then call us by the giving number bellow
                        </p>
                    </div>
                    <div className=" container ms-5 d-flex" >
                        <div className="col-md-4 me-5">
                           <img src={"https://images.unsplash.com/photo-1520719779766-3085136d7180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"} alt="" srcset="" />
                        </div>
                <div className="col-md-6 ms-5">
                <h2 className="text-start " style={{textDecoration: "underline", textDecorationStyle:"dotted"}}>
                Get In Touch
                </h2>
                <p className="">
                    If you want to say anything then come and fill the form and write in the massage box with your feedback or your suggesition. We are waiting dor your suggesition so why you waiting for please come and send us. 
                </p>
                <textarea className="d-flex justify-content-start" name="text" id="" cols="40" rows="5" placeholder="Write your massage here..."></textarea> <br />
                <button className="btn text-light d-flex justify-content-start" style={{backgroundColor: "rgb(236, 64, 122)"}}>Submit</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;