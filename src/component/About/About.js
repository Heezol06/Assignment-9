import React from 'react';
import "./About.css"
const About = () => {
    return (
        <div>
            <div className="d-flex text-light about-sec">
                    <p className="p-5 position-relative text-light">he people who make up today’s thriving photographic community are our eyes to the world. Whether established artists and journalists or passionate emerging voices, they inform us, they inspire us, they amaze us, they put our world in the broader context of history.
                    But that community also faces great challenges — dwindling sales, increased competition and a fragile trust in photographers’ mission to inform. Too often, those factors can make those of us in that community, photographers and photo editors alike, lose sight of what drive us.</p>
                    <img className="img-radius" src={"https://image.freepik.com/free-photo/top-view-photography-accesories-with-copy-space_23-2148363427.jpg"} alt="" srcset="" />

                </div>
                
                {/* 3rd batch student opinion  */}
                <div className="container my-5 ">
                <h3 className="title my-5" style={{textDecoration: "underline"}}>
                Meet Our Experts
                </h3>
                <div className="d-flex gap-3">
                <div className="col-md-3">
                    <div className="card h-100" >
                    <img src={"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} className="card-img-top " style={{borderRadius: "50px 100px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Aaron, Hank</h5>
                        <p className="text-danger">Enroll Course: Image editing</p>
                        <p className="card-text">This is the best platfrom. I am very pleased for there service. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quas! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ame100</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card h-100" >
                    <img src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"} style={{borderRadius: "50px 100px"}} className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Selina</h5>
                        <p className="text-danger">Enroll Course: Digital intermediate Photography</p>
                        <p className="card-text">After this course i am experienced. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quod cum facilis ducimus saepe totam! </p>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card h-100" >
                    <img src={"https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80"} style={{borderRadius: "50px 100px"}} className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Anna-Marie</h5>
                        <p className="text-danger">Enroll course: Camera Eqipment</p>
                        <p className="card-text">This course change my life. They are rally helpfull. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim!</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card h-100" >
                    <img src={"https://images.unsplash.com/photo-1525373953925-d9ed9fde387b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=805&q=80"} style={{borderRadius: "50px 100px"}}  className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Jakson</h5>
                        <p className="text-danger">Enroll course: Wildlife photography</p>
                        <p className="card-text">After this course i join with Dihan Choudhuri. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, pariatur.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
                {/* student analysis  */}
                <div className="container student-analasis text-light d-flex my-5 student-sec">
                <div className="col-md-4 p-3 py-4">
                    <h1>
                    9
                    </h1>
                    <h3 className="title">Course</h3>
                    <p>
                    Course we plan for student.
                    </p>
                </div>
                <div className="col-md-4 p-3 py-4">
                    <h1>
                    2412
                    </h1>
                    <h3 className="title">4th batch student</h3>
                    <p>
                    Student enroll for our course.
                    </p>
                </div>
                <div className="col-md-4 p-3 py-4">
                    <h1>
                    5000
                    </h1>
                    <h3 className="title ">Student limit</h3>
                    <p>
                    We will start our course soon.
                    </p>
                </div>
            </div>
            </div>
                
    );
};

export default About;