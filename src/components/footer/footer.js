import React from 'react';
import './footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Follow us on our socials:</span>
        </div>

        <div>


          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.instagram.com/moonnails8639/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.facebook.com/people/Concord-Nail-Tek/100095126682743/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.google.com/search?q=moon+nails+concord&oq=moon+nail&aqs=chrome.0.69i59j0i67i433i650j69i57j69i64j69i59j69i60l2j69i61.3608j0j9&sourceid=chrome&ie=UTF-8'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>
         
        </div>
      </section>


      <section className='aboutus-footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="moon" className="me-3" />
                Moon Nails llc
              </h6>
                <p>
                Our small business-owned nail salon is run by three highly skilled nail technicians with years of industry expertise.
                </p>
                <p>
                Their goal is to provide their clients with the best possible care while maintaining the highest standard of sanitization.
                </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              {/* <img src="/images/salon.jpg" alt="" /> */}
              <div class="map-responsive">
              <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.2651955769024!2d-80.73018208912322!3d35.37387804668352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541caf4602de2f%3A0xa638fc53b531cd30!2sMoon%20Nails!5e0!3m2!1sen!2sus!4v1695230635958!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>              
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            

           <div class="business-info2">
             <div style={{textAlign:'center'}}>
             <h6 className='text-uppercase fw-bold mb-4'>- Hours -</h6>

             <h6>
                Monday-Friday
             </h6>
             <p className="hours">9am - 7pm</p>

             <h6>
                Saturday
             </h6>
             <p className="hours">9am - 6pm</p>

             <h6>
                 Sunday
             </h6>
             <p className="hours">closed</p>
             </div>
            
            </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p class="location">
                <MDBIcon icon="home" className="me-2" />
                <a href="https://goo.gl/maps/skeyJGa1ctqPQ1de8">
                    8639 Concord Mills
                    Boulevard,
                    Concord, NC 28027
                </a>
              </p>
              <p className='contact'>
                <MDBIcon icon="phone" className="me-3" />
                <a href="tel:704-979-1989">(704) 979-1989</a>
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}