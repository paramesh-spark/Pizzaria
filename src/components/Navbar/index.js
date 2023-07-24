import React from 'react';
import {Nav,NavLink,NavIcon,Bars} from './NavbarElements';

function Navbar({toggle}) {
  return (
    <>
        <Nav>
            <NavLink to="/">Pizzaria</NavLink>
            <NavLink onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavLink>
        </Nav>
    </>
  )
}

export default Navbar;