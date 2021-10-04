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
            </div>
        </div>
    );
};

export default Home;