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
        <div className="container">
            <h1>Our Services</h1>
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