import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    const [services ,setService] =useState([])
    useEffect(()=>{
        fetch('/secondApi.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="container  my-5">
            <h2 style={{color:"#ec407a", textDecoration: "underline"}}>Service For You</h2>
            <div className="row ">
                {
                    services.map(service => <SingleService
                    service={service}
                    ></SingleService>
                        )
                }
            </div>
        </div>
    );
};

export default Service;