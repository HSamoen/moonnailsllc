import React , { useEffect }from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import './services.css'

export default function App() {
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const elementsToFadeIn = document.querySelectorAll('.fade-in');
    
          elementsToFadeIn.forEach((element) => {
            const elementOffset = element.offsetTop;
            const windowHeight = window.innerHeight;
    
            if (scrollY > elementOffset - windowHeight ) {
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
    
    <div  className='all-services'>
        <div>
            <h1 >ALL SERVICES</h1>
        <div className='service-item' s
        >
            <div>
            <img src="/images/mani.jpeg" alt="mani" />
            </div>
            <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
        <MDBListGroupItem>
            <h2 style={{marginBottom:50}}>MANICURES</h2>
          <h5 className='fw-bold'>Basic Manicure</h5>
          <p className='text-muted mb-0'>
          Includes the basic cleaning of nails with cuticles trimmed, nails shaping, light exfoliation, massage and choice of polish
          </p>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5 className='fw-bold'>Spa Manicure</h5>
          <p className='text-muted mb-0'>
          Includes the basic cleaning of nails with cuticles trimmed, nails shaping, light exfoliation, massage, hot paraffin wax with choice of nail polish         
          </p>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5 className='fw-bold'>Gel Manicure</h5>
          <p className='text-muted mb-0'>
          Includes the basic cleaning of nails with cuticles trimmed, nails shaping, light exfoliation, massage with choice of gel polish     
          </p>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5 className='fw-bold'>SNS Manicure</h5>
          <p className='text-muted mb-0'>
          Includes the basic cleaning of nails with cuticles trimmed, nails shaping, light exfoliation, massage with choice of dipping powder          
          </p>
        </MDBListGroupItem>
      </MDBListGroup>
            </div>
        </div>


        <div className='service-item fade-in' 
        >
            <div>
            <img src="/images/pedi.jpeg" alt="pedi" />
            </div>
            <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
        <MDBListGroupItem>
            <h2 style={{marginBottom:50}}>PEDICURE TREATMENTS</h2>
          <h5 className='fw-bold'>Basic Pedicure</h5>
          <p className='text-muted mb-0'>
          Includes the basic cleaning of toe nails with cuticles trimmed, nails shaping, light exfoliation, massage and choice of polish         
          </p>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5 className='fw-bold'>Spa Pedicure</h5>
          <p className='text-muted mb-0'>
          Includes all features of the basic pedicure with lavender mask, hot towels, intense massage followed with a warm paraffin treatment
          </p>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5 className='fw-bold'>Deluxe Pedicure</h5>
          <p className='text-muted mb-2 fw-bold'>(in a box)</p>
          <p className='text-muted mb-0'>
          All our scented deluxe pedicures include everything you can imagine in a pedicure. A scented mico-exfoliation sugar scrub of your choosing to exfoliate your skin and masque is applied to gently tighten back up the skin. All followed by a relaxing massage and legs wrapped in hot towels. The pedicure is finished off with warm paraffin treatment
          </p>
          <p className='text-muted mb-2 fw-bold' style={{marginTop:10}}>+ Lemon</p>
          <p className='text-muted mb-2 fw-bold'>+ Green Tea</p>
          <p className='text-muted mb-2 fw-bold'>+ Orange</p>
          <p className='text-muted mb-2 fw-bold'>+ Mango</p>
          <p className='text-muted mb-2 fw-bold'>+ Lavender</p>
          <p className='text-muted mb-2 fw-bold'>+ Rose</p>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5 className='fw-bold'>Hot Stone Pedicure</h5>
          <p className='text-muted mb-0'>
          Includes all features of the Spa Pedicure but with a hot stone massage for pain relief, relaxation, and therapy</p>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5 className='fw-bold'>Jelly and Hot Stone Pedicure</h5>
          <p className='text-muted mb-0'>
          Includes all features of the Spa Pedicure but with a touch of playfulness. The foot bath is filled with translucent fluffy jelly instead of water. The jelly can feel soothing on sun soaked skin or retains heat during the winter months. The pedicure is finished with hot stone massage
          </p>
        </MDBListGroupItem>
      </MDBListGroup>
            </div>
        </div>

        <div className='no-des-services'>
        <div className='service-item fade-in' 
        >
            <div>
            <img src="/images/fullset.png" alt="fullset" />
            </div>
            <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
        <MDBListGroupItem>
            <h2 style={{marginBottom:50}}>FULLSETS/ FILL-INS</h2>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Full Set Acrylic</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Full Set Acrylic w/ Gel Polish</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Full Set Solar Pink and White</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Full Set SNS</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Refill Acrylic</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Refill Acrylic w/ Gel</h5>
        </MDBListGroupItem>
      </MDBListGroup>
            </div>
        </div>


        <div className='service-item fade-in' 
        >
            <div>
            <img src="/images/polishchange.jpeg" alt="pedi"/>
            </div>
            <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
        <MDBListGroupItem>
            <h2 style={{marginBottom:50}}>POLISH CHANGES</h2>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Nail Gel Polish</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Toes Gel polish</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Regular Color Nails</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Regular Color Toes</h5>
        </MDBListGroupItem>
      </MDBListGroup>
            </div>
        </div>


        <div className='service-item fade-in' 
        >
            <div>
            <img src="/images/waxing.jpeg" alt="waxing" />
            </div>
            <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
        <MDBListGroupItem>
            <h2 style={{marginBottom:50}}>WAX/ HAIR REMOVAL</h2>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Eyebrow</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Lip</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Chin</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Cheek</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Full Face</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Under-arm</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Half Legs</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Full Legs</h5>
        </MDBListGroupItem>
      </MDBListGroup>
            </div>
        </div>

        <div className='service-item fade-in' 
        >
            <div>
            <img src="/images/kids.jpeg" alt="pedi"/>
            </div>
            <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
        <MDBListGroupItem>
            <h2 style={{marginBottom:50}}>KIDS MENU</h2>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Kids Pedicure</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Kids Manicure</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Kids Polish Toes</h5>
        </MDBListGroupItem>
        <MDBListGroupItem>
          <h5>Kids Polish Hands</h5>
        </MDBListGroupItem>
      </MDBListGroup>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}


