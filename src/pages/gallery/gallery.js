import React , { useEffect }from 'react';
import './gallery.css'
import {
  MDBCardImage,
  MDBRow,
  MDBCol,

} from 'mdb-react-ui-kit';

export default function Cards() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementsToFadeIn = document.querySelectorAll('.fade-in');

      elementsToFadeIn.forEach((element) => {
        const elementOffset = element.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollY > elementOffset - windowHeight / 2) {
          element.classList.add('loaded');
        } else {
          element.classList.remove('loaded');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='gallery-cards'>
      <MDBRow className='row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/businesscard.jpg'
            alt='placeholder-img'
            position='top'
            // className='buinesscard-img'
            className='buinesscard-img img-fluid fade-in'
          />
        
      </MDBCol>
      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/nailimg1.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>
      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/nailimg2.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>
      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/nailimg3.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

       <MDBCol md={6} lg={3}>
       <video  className="nail-videos fade-in" controls autoplay loop muted>
         <source src="/images/kellynails.mp4" type="video/mp4"/>
      </video>
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/gall1.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/gall2.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/gall3.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
            src='/images/gall4.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall5.jpg'
            alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall6.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall7.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>


      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall10.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall11.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall12.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall13.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall14.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall15.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall16.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall17.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall18.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall19.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall20.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>

      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall21.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>


      <MDBCol md={6} lg={3}>
          <MDBCardImage
             src='/images/gall22.jpg'
             alt='placeholder-img'
            position='top'
            className='card-img fade-in'
          />
      </MDBCol>
    </MDBRow>
    </div>
  );
}