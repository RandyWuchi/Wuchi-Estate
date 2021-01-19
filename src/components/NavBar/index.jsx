import React from 'react';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button';
import {
  Logo,
  MenuBar,
  Nav,
  NavBtn,
  NavMenu,
  NavMenuLinks,
} from './NavBarElements';

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to='/'>WUCHI</Logo>
      <MenuBar onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.Link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
