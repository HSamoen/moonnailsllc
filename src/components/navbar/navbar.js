import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNav, setShowNav] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(true); 

  const toggleVisibility = () => {
    setShowNav(!showNav);
    setShowSocialIcons(!showSocialIcons); 
  };

  return (
    <MDBNavbar expand='lg' light bgColor='light' className="navbar">
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleVisibility}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink className='navbar-link' active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink className='navbar-link' active aria-current='page' href='services'>
                Services
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink className='navbar-link' active aria-current='page' href='gallery'>
                Gallery
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink className='navbar-link' active aria-current='page' href='contacts' tabIndex={-1} aria-disabled='true'>
                Contacts
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

        <div>
          <Link to="/" className='business-name'>
            {showSocialIcons ? 'Moon Nails' : ''}
          </Link>
        </div>
        {showSocialIcons && window.innerWidth > 375 && (
          <div className='social-icons'>
            <MDBBtn outline color="dark" floating className='m-1' href='https://www.facebook.com/people/Concord-Nail-Tek/100095126682743/' role='button' target="_blank">
              <MDBIcon className='icon' fab icon='facebook' style={{ color: 'black' }} />
            </MDBBtn>

            <MDBBtn outline color="dark" floating className='m-1' href='https://www.instagram.com/moonnails8639/' role='button' target="_blank">
              <MDBIcon className='icon' fab icon='instagram' style={{ color: 'black' }} />
            </MDBBtn>
          </div>
)}

      </MDBContainer>
    </MDBNavbar>
  );
}

