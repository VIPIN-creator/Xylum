import React, { useState } from "react";
 import { Jumbotron, Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import {NavLink} from "react-router-dom";

function Header() {

const [isNavOpen, setNav] = useState(false);


function toggleNav(){
    setNav(!isNavOpen);
}


    return(
        <React.Fragment>
        <Jumbotron style={{color: 'white'}}>
            <div className="container-fluid ">
                
           
                <div className="row text-center justify-content-center">
                    <div className="col-6 col-sm-2 ">
                        <img src={"assets/images/logo2.png"} className="img-fluid" alt="im" />
                    </div>
                    <div className=" col-6 col-sm-2 align-self-center">
                        <h1>XYLUM</h1>
                    </div>
                    </div>   
                
            </div>
        </Jumbotron>
        <Navbar dark expand="lg">
        <div className="container text-white">
        <NavbarToggler onClick={toggleNav} />
           
        <Collapse isOpen={isNavOpen} navbar>
        <Nav className="mr-auto" navbar>
            <NavItem>
               
            <NavLink   to="/home"><span class="fa fa-2x fa-home nav-link"></span></NavLink>
                
               
              </NavItem>
            
            </Nav>
          <Nav  navbar>
            <NavItem>
              <NavLink className="nav-link mr-3" to="/indoorplants" >Indoor plants</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link mr-3" to="/outdoorplants">Outdoor plants</NavLink>
            </NavItem>
            <NavItem>
             <NavLink className="nav-link mr-3"  to='/comboplants'>Combo plants</NavLink>
                 </NavItem>
                  <NavItem>
             <NavLink className="nav-link mr-3" to='/fruitplants'>Fruit plants</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
            <NavItem>
               
            <NavLink to="/cart"> <span class="fa fa-2x fa-shopping-cart nav-link"></span></NavLink>
               
              </NavItem>
            
            </Nav>
            
            </Collapse>
        </div>

      </Navbar>
        </React.Fragment>
    );
}

export default Header;