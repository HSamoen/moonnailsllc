import React from 'react';
import './gallery.css'
import {
  MDBCardImage,
  MDBRow,
  MDBCol,

} from 'mdb-react-ui-kit';

export default function Cards() {
  return (
    <div className='gallery-cards'>
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
          <MDBCardImage
            src='/images/businesscard.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
            style={{height: 240}}
          />
        
      </MDBCol>
      <MDBCol>
          <MDBCardImage
            src='/images/nailimg1.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>
      <MDBCol>
          <MDBCardImage
            src='/images/nailimg2.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>
      <MDBCol>
          <MDBCardImage
            src='/images/nailimg3.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

       <MDBCol>
       <video  className="nail-videos" controls autoplay loop muted>
         <source src="/images/kellynails.mp4" type="video/mp4"/>
      </video>
      </MDBCol>

      <MDBCol>
          <MDBCardImage
            src='/images/gall1.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
            src='/images/gall2.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
            src='/images/gall3.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
            src='/images/gall4.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
             src='/images/gall5.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
             src='/images/gall6.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
             src='/images/gall7.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>


      <MDBCol>
          <MDBCardImage
             src='/images/gall10.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
             src='/images/gall11.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
             src='/images/gall12.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
             src='/images/gall13.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>

      <MDBCol>
          <MDBCardImage
             src='/images/gall14.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img'
          />
      </MDBCol>
    </MDBRow>
    </div>
  );
}