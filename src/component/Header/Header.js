import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../../img/camera-logo.png";
import Banner from '../Banner/Banner';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div>
            <Navbar bg="dark" variant="dark"  className="d-flex justify-content-between">
    <Container >
    <div>
    <img
          alt=""
          src={img}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
    <Navbar.Brand href="#home">Learn About The Lenses</Navbar.Brand>
    </div>
    <div>
    <NavLink
  to="/home"
  activeStyle={{
    fontWeight: "bold",
    color: "#ec407a"
  }}
  className="nav_item"
>
  Home
</NavLink>
<NavLink
  to="/service"
  activeStyle={{
    fontWeight: "bold",
    color: "#ec407a"
  }}
  className="nav_item"
>
  Our Services
</NavLink>
    <NavLink
  to="/contactus"
  activeStyle={{
    fontWeight: "bold",
    color: "#ec407a"
  }}
  className="nav_item"
>
  Contact us
</NavLink>

    <NavLink
  to="/aboutus"
  activeStyle={{
    fontWeight: "bold",
    color: "#ec407a"
  }}
  className="nav_item"
>
  About us
</NavLink>
    
    </div>
    </Container>
  </Navbar>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;