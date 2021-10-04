import React, { useEffect, useState } from 'react';
import Eqipment from '../Eqipment/Eqipment';

const Home = () => {
    const [homeServices , setHomeService] = useState([])
    useEffect(()=>{
        fetch('./fastApi.json')
        .then(res => res.json())
        .then(data => setHomeService(data))
    },[])
    return (
        <div className="container my-5">
            <h1  style={{color:"#ec407a", textDecoration: "underline"}}>Our Services</h1>
            <div className="row">
            {
                homeServices.map(homeService => <Eqipment
                    homeService={homeService}
                ></Eqipment>)
            }
            <div className="d-flex flex-row">
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
            </div>
        </div>
    );
};

export default Home;