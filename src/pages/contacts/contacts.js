import React from 'react'
import './contacts.css'
import {
    MDBIcon,
  } from 'mdb-react-ui-kit';

const Contacts = () => {
    return (
        <div className="message">
            
            <p>To book an appointment or if you have any questions, contact the number listed below.</p>
            <p>Thank you!</p>

            <a href="tel:704-979-1989">(704) 979-1989</a>

            <div>
                <MDBIcon fab icon='cc-visa' size='2x' className='payment-icons'/>
                <MDBIcon fab icon='cc-mastercard' size='2x' style={{color:'black'}}/>
            </div>

        </div>
    )
}

export default Contacts;