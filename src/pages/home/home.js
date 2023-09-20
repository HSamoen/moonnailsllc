import React, { useEffect, useState } from 'react';
import './home.css'
import {
  MDBBtn,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import Header from '../../components/header/header';


const Home = () => {
  const [isVisible, setIsVisible] = useState({
    id: "none",
  });

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  const toggleDiv = (e) => {
    setIsVisible((prevState) => ({
      id: prevState.id === e.target.id ? "none" : e.target.id,
    }));
  };

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
    <div>
      <Header />
      <div className="featured-services">
        <div className='featured-services-header'>
          <h1>Featured Services</h1>
          <MDBNavbarLink>
            <MDBBtn
              rounded className='mx-2 custom-button' color='black'
              href='#ourservices'
            >
              All Services
            </MDBBtn>
          </MDBNavbarLink>
        </div>

         
        <div className='services-options'>
          <h3>Manicure 
          <button className='serviceBtn' id ="option1" onClick={(e) => {toggleDiv(e)}}>⌄</button>
            <div className ={isVisible.id === "option1" ? `option1` : "none"}>
              <p>+ Basic Manicure</p>
              <p>+ Spa Manicure</p>
              <p>+ Gel Manicure</p>
              <p>+ SNS Manicure</p>
            </div>
            
          </h3>
          <h3>Pedicure 
          <button className='serviceBtn' id ="option2" onClick={(e) => {toggleDiv(e)}}>⌄</button>
            <div className ={isVisible.id === "option2" ? `option2` : "none"}>
              <p>+ Basic Pedicure</p>
              <p>+ Spa Pedicure</p>
              <p>+ Deluxe Pedicure</p>
              <p>+ Hot Stone Pedicure</p>
              <p>+ Jelly and Hot Stone Pedicure</p>
            </div>
          </h3>
          <h3>Full sets 
          <button className='serviceBtn' id ="option3" onClick={(e) => {toggleDiv(e)}}>⌄</button>
            <div className ={isVisible.id === "option3" ? `option3` : "none"}>
              <p>+ Full Set Acrylic</p>
              <p>+ Full Set Acrylic w/ Gel Polish</p>
              <p>+ Full Set Solar Pink and White</p>
              <p>+ Full Set SNS </p>
              <p>+ Refill Acrylic</p>
              <p>+ Refill Acrylic w/ Gel</p>
            </div>
          </h3>
          <h3>Polish Changes 
          <button className='serviceBtn' id ="option4" onClick={(e) => {toggleDiv(e)}}>⌄</button>
            <div className ={isVisible.id === "option4" ? `option4` : "none"}>
              <p>+ Nail Gel Polish</p>
              <p>+ Toes Gel polish</p>
              <p>+ Regular Color Nails</p>
              <p>+ Regular Color Toes</p>
            </div>
          </h3>
        </div>
        
      </div>

<div className="aboutus-bg">
  <img src="https://nailtrendspringgrove.com/uploads/fnail0afw5skl/logo/2019/10/07/SLIDE11-nwo.png" alt="About Us" />
</div>

<div className="about-us-container">
  <div className="about-us-header">
    <h1 className='fade-in'>About Our Business</h1>
  </div>

  <div className="aboutus-img1">
    <img src="/images/image1.avif" alt="aboutus" />
  </div>

  <div className="aboutus-sec2">
    <img src="/images/image3.avif" alt="aboutus" />
    <p className='fade-in'>
      Our small business-owned nail salon is run by three highly skilled nail technicians with years of industry expertise. They specialize in a wide range of nail care services such as SNS, acrylic, gel, and more.
    </p>
    <p className='fade-in'>
      Their goal is to provide their clients with the best possible care while maintaining the highest standard of sanitization.
    </p>
    <p className='fade-in'>
      Explore our gallery to see some of their greatest works over the years, along with those of other incredibly skilled nail technicians.
    </p>
    <div className="browse-gallery-link ">
      <MDBNavbarLink>
        <MDBBtn
          outline
          rounded
          className="mx-2 custom-hover custom-small-button fade-in"
          color="black"
          href="gallery"
        >
          Gallery
        </MDBBtn>
      </MDBNavbarLink>
    </div>
  </div>
</div>


       <div className="our-services-container fade-in">
            <h1>Our Services</h1>

            <div id='ourservices'>
            <MDBNavbarLink href="services" className="service-link">
                <div>
                    <img
                    src="/images/mani-icon.png"
                    alt="mani-icon"
                    />
                    <h3>Manicure</h3>
                </div>
                </MDBNavbarLink> 

                <MDBNavbarLink href="/services#pedi-treatments" className="service-link">
                <div>
                    <img
                    src="/images/pedi-icon.png"
                    alt="pedi-icon"
                    />
                    <h3>Pedicure</h3>
                </div>
                </MDBNavbarLink> 

                <MDBNavbarLink href="services" className="service-link">
                <div>
                    <img
                    src="/images/wax-icon.png"
                    alt="wax-icon"
                    />
                    <h3>Wax/ Hair Removal</h3>
                </div>
                </MDBNavbarLink>

                <MDBNavbarLink href="services" className="service-link">
                <div>
                    <img
                    src="/images/gel.png"
                    alt="gelmachine-icon"
                    />
                    <h3>Gel</h3>
                </div>
                </MDBNavbarLink>

                <MDBNavbarLink href="services" className="service-link">
                <div>
                    <img
                    src="/images/full set.png"
                    alt="fullset-icon"
                    />
                    <h3>Full Sets</h3>
                </div>
                </MDBNavbarLink>

                <MDBNavbarLink href="services" className="service-link">
                <div>
                    <img
                    src="/images/fillin.png"
                    alt="fillins-icon"
                    />
                    <h3>Fill Ins</h3>
                </div>
                </MDBNavbarLink>

                <MDBNavbarLink href="services" className="service-link">
                <div>
                    <img
                    src="/images/kidhands.png"
                    alt="kidhands-icon"
                    />
                    <h3>Kid Services</h3>
                </div>
                </MDBNavbarLink>
            </div>
            
            <MDBNavbarLink className="browse-service-link">
                        <MDBBtn
                        outline rounded className='mx-2 custom-hover' color='black'
                        href='services'
                        >
                        Browse Services
                        </MDBBtn>
                    </MDBNavbarLink>
            </div>
    </div>
  );
}

export default Home;
