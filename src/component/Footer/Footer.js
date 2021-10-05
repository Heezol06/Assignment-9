import React from 'react';
import img from "../../img/camera-logo.png";

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <div className="row text-light  m-0">
               <div className="col-md-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                        alt=""
                        src={img}
                        width="100"
                        height="100"
                        className=""
                        />
                        <h3>Learn About The Lenses</h3>
                </div>
                <div>
                        <p>
                        We specialise in high-end stills and video content and have been producing shoots for over 30 years from our Central London location. We work alongside advertising agencies, designers, CGI houses, and directly with companies. Prices include: crew, studio set, equipment, kitchen facilities and a selection of props & backgrounds. All quotations are bespoke and project specific.
                        </p>
                </div>
               </div>
                <div className="col-md-4 mt-4">
                    <h3>Our courses</h3>
                    <div className="d-flex m-2 my-4">
                    <div>
                    <p>Digital intermediate Photography</p>
                    <p>Photography Basic</p>
                    <p>Image editing</p>
                    </div>
                    <div>
                    <p>Camera Eqipment</p>
                    <p>Wildlife photography</p>
                    <p>Wedding photography</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <h3>Suggestion Part</h3>
                    <p className="m-4">If you want to suggest us anything then you can write here </p>
                    <input type="text" placeholder="write your suggestion here" style={{border: "1px solid black" , borderRadius: "15px", padding: "5px"}}/>
                    <div className="my-5">
                    <i class="fab fa-facebook-square fa-2x me-3 ms-4"></i>
                    <i class="fab fa-instagram-square fa-2x me-3"></i>
                    <i class="fab fa-twitter-square fa-2x me-3"></i>
                    <i class="fab fa-linkedin fa-2x me-3"></i>
                    </div>
                </div>
            </div>
            <hr />
            <p className="py-5 m-0">© Education site -  Learn Photography. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;