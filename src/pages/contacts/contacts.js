import React, { useEffect } from 'react';
import './contacts.css'
import {
    MDBIcon,
  } from 'mdb-react-ui-kit';

const Contacts = () => {
    useEffect(() => {
        const elementsToFadeIn = document.querySelectorAll('.fade-in');
        elementsToFadeIn.forEach((element) => {
          element.classList.add('loaded');
        });
      }, []);
    return (
        <div className="message fade-in">

            <p>To book an appointment or if you have any questions, contact the number listed below.</p>
            <p>Thank you!</p>

            <a href="tel:704-979-1989">(704) 979-1989</a>

            <div>
                <MDBIcon fab icon='cc-visa' size='1x' className='payment-icons'/>
                <MDBIcon fab icon='cc-mastercard' size='1x' style={{color:'black'}} className='payment-icons'/>
                <MDBIcon fab icon='google-pay' size='1x' style={{color:'black'}} className='payment-icons'/>
                <MDBIcon fab icon='cc-apple-pay' size='1x' style={{color:'black'}} className='payment-icons'/>
            </div>

        </div>
    )
}

export default Contacts;