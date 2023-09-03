import React from 'react';
import './footer.css'
import {
    MDBNavbarLink,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div class="footer-container">
            <div class="business-info">
            <MDBNavbarLink className='link' href="/" style={{color:'black'}}>
                <h1>Moon Nails llc</h1>
            </MDBNavbarLink> 

           <div class="location">
           <h2>Location</h2>
            {/* <p>
            8639 Concord Mills
            Boulevard,
            Concord, NC 28027
            </p> */}
            <a href="https://goo.gl/maps/skeyJGa1ctqPQ1de8">8639 Concord Mills
            Boulevard,
            Concord, NC 28027</a>
           </div>

            <div class="contact">
            <h2>Contact</h2>
            <a href="tel:704-979-1989">(704) 979-1989</a>
            </div>
            <div id='footer-ss-icons'>
          <MDBBtn outline color="dark" floating className='m-1' href='https://www.facebook.com/people/Concord-Nail-Tek/100095126682743/' role='button' target="_blank">
            <MDBIcon fab icon='facebook' size='2x' style={{ color: 'black' }} />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='https://www.instagram.com/moonnails8639/' role='button' target="_blank">
            <MDBIcon fab icon='instagram' size='2x' style={{color:'black'}}/>
          </MDBBtn>
          </div>
            </div>


           <img src="/images/callaLilly.jpeg" alt="calla-lily"></img>
           <div class="business-info2">
            <div class="business-hours">
            <h2>Hours</h2>
            <h3>
             Monday-Friday
            </h3>
            <p className="hours">9am - 7pm</p>

            <h3>
                Saturday
            </h3>
            <p className="hours">9am - 6pm</p>

            <h3>
                Sunday
            </h3>
            <p className="hours">closed</p>
            </div>
            
           </div>
        </div>
    )
}

export default Footer;