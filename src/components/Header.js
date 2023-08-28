import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../images/img1.png'
import { BsBag } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import viva from "../images/viva1.png"
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='offer'><center>PAY ONLINE & GET 10% OFF</center></div>
    <Navbar bg="black" expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand href="#"><span className='text-info fs-1 '>Viva</span><span className='text-secondary fs-5'>-creation</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 outline-"
            style={{  MaxHeight: '200px' }}
            navbarScroll
          >
            <NavDropdown title="SCRUNCHIE WATCHES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Moon Style Watch</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Rose Gold White Watch
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Printed Rose Gold White Watch</NavDropdown.Item>
              <NavDropdown.Item href="#action6">White Moon Style Watch</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Diamond Style Golden Watch</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Diamond Style Black Watch</NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
            
            
            <Nav.Link ><Link to="/Chain" className="uuu" >SCRUNCHIE EARRINGS</Link></Nav.Link>
            <Nav.Link><Link to="/Combo" className="uuu">COMBO</Link></Nav.Link>
            <Nav.Link To="#action4" className="uuu">TRACK ORDER</Nav.Link>
            <Nav.Link To="#action5" className="uuu">ABOUT US</Nav.Link>
            

            
            
          </Nav>
          <Form  className="yyy d-flex me-5" >
            <BsBag/>&nbsp;&nbsp;
            <BsWhatsapp/>&nbsp;&nbsp;
            <BsGeoAlt/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header