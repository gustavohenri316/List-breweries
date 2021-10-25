import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
} from 'reactstrap';
import {Link} from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img src="https://arphoenix.com.br/wp-content/uploads/2021/06/arp_logo.png" alt="Logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
            <NavItem>
            <Link to="/" className="nav-link">Listagens</Link>
            </NavItem>            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header
