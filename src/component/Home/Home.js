import React, { useEffect, useState } from 'react';
import Eqipment from '../Eqipment/Eqipment';
import './Home.css';
import Banner from '../Banner/Banner'

const Home = () => {
    const [homeServices , setHomeService] = useState([])
    useEffect(()=>{
        fetch('./fastApi.json')
        .then(res => res.json())
        .then(data => setHomeService(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className="container my-5">
            <h1  style={{color:"#ec407a", textDecoration: "underline"}}>Our Services</h1>
            <div className="row">
            {
                homeServices.map(homeService => <Eqipment
                    key={homeService.key}
                    homeService={homeService}
                ></Eqipment>)
            }
            {/* disciption about photography  */}
            <div className="d-flex flex-row my-5">
                <div className="col-md-4">
                <img src={"https://image.freepik.com/free-vector/focus-concept-illustration_114360-1291.jpg"} alt="" srcset="" className="w-75" />
                <p>Learning about light, exposure, color, tone, composition and timing will help you produce more creative, more interesting, more noticeable photographs. ... Learning to appreciate different types of light and when some light is better for making photos than others, will help you create more outstanding photographs.</p>
                </div>
                <div className="col-md-4">
                <img src={"https://image.freepik.com/free-vector/professional-photographer-taking-pictures-young-woman-female-model-posing-camera-against-white-backdrop-among-studio-light-vector-illustration-photo-shooting-photography-concept_74855-10141.jpg"} alt="" srcset="" className="w-100 mt-5" />
                <p>Event photography is important because it gives your event or business credibility. It also provides a lot of great material for marketing and makes your business look professional and reliable. Good event photographers can provide images that can be used again to promote a business.</p>
                </div>

                <div className="col-md-4">
                <img src={"https://image.freepik.com/free-vector/studio-photographer-concept-illustration_114360-2459.jpg"} alt="" srcset="" className="w-75 mt-4"/>
                <p>Create images that attract attention and win clients. Advertising and product photography is often seen as one of the most complex areas of professional photography. It's also one of the most lucrative.</p>
                </div>
            </div>
            
            {/* company analaysis  */}
            <div className="container text-light d-flex bg-dark rounded my-5">
                <div className="col-md-4 p-3 py-4">
                    <h1>
                    7
                    </h1>
                    <h3 className="title">Completed Courses</h3>
                    <p>
                    We have won awards in a short time
                    </p>
                </div>
                <div className="col-md-4 p-3 py-4">
                    <h1>
                    2412
                    </h1>
                    <h3 className="title">Happy Students</h3>
                    <p>
                    We have hundreds of happy clients
                    </p>
                </div>
                <div className="col-md-4 p-3 py-4">
                    <h1>
                    3422
                    </h1>
                    <h3 className="title ">Hardly Teaching Hours</h3>
                    <p>
                    We completed more items in 2016 season
                    </p>
                </div>
            </div>
            </div>

            {/* About our instractor  */}
            <div className="container my-5 ">
                <h3 className="title my-5" style={{textDecoration: "underline"}}>
                Meet Our Experts
                </h3>
                <div className="d-flex gap-3">
                <div className="col-md-3">
                    <div className="card h-100" >
                    <img src={"https://psdconverthtml.com/live/edupress/upload/testi_01.png"} className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">John Doe</h5>
                        <p className="text-danger">CEO</p>
                        <p className="card-text">I have more than 20 years’ experience in Office  sit amet consectetur adipisicing elit. Nemo, architecto i don't believe in to much talk i just believe in work. And i alwase like to be busy in my work...</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card h-100" >
                    <img src={"https://psdconverthtml.com/live/edupress/upload/testi_02.png"}  className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bernice Neumann</h5>
                        <p className="text-danger">Profestional Photographer</p>
                        <p className="card-text">I am one of the most popualr and  experienced photographer in bangladesh. People called me a wild photographer but i am doing good at wedding and product too. Most of the time i would like to take short by dron...</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card h-100" >
                    <img src={"https://psdconverthtml.com/live/edupress/upload/testi_03.png"}  className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Jenny Cameron</h5>
                        <p className="text-danger">Profestional Photo Editor</p>
                        <p className="card-text">I am one of the editor of this company an i believe that while a photographer will ensure the proper lighting, framing, and environment prior to taking the photograph, an editor...</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card h-100" >
                    <img src={"https://psdconverthtml.com/live/edupress/upload/testi_04.png"}  className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bob Neumann</h5>
                        <p className="text-danger">Market Expart</p>
                        <p className="card-text">Successful marketing and branding are among the most challenging aspects of a profitable photography business.Many photographers make the mistake of letting their marketing...</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;



// style={{height: "250px" , width: "270px"}} 