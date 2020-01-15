import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navblack navbar-dark">
      <Navbar expand="md" >
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Character Guide</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Episode Guide</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Puzzle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Meme Generator</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Navigation;