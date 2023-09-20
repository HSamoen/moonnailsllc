import React, { useEffect } from 'react';
import './header.css'
import {
  MDBBtn,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';

export default function Header() {
  useEffect(() => {
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach((element) => {
      element.classList.add('loaded');
    });
  }, []);

  return (
    <header>
      <div id='headersec' className='p-5 text-center bg-image header-container fade-in'>
        <div className='header-des fade-in'>
          <div className='d-flex justify-content-center align-items-center h-100 fade-in'>
            <div className='text-black fade-in'>
              <h1 className='mb-3 fade-in'>Welcome</h1>
              <h3>We offer the highest level of services to our clients</h3>
              <h5 className='mb-4'>Browse our services and make an appointment today</h5>
             
              <div className='header-buttons'>
                <MDBNavbarLink>
                  <MDBBtn
                    outline
                    rounded
                    className='mx-2 custom-hover'
                    color='dark'
                    href='services'
                  >
                    Services
                  </MDBBtn>
                  <MDBBtn
                    outline
                    rounded
                    className='mx-2 custom-hover'
                    color='dark'
                    href='contacts'
                  >
                    Contact
                  </MDBBtn>
                </MDBNavbarLink>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
