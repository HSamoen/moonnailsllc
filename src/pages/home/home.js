import React, { useEffect, useState } from 'react';
// import {fa fa-chevron-down} from 'react-icons/fa';
import './home.css'
import {
  MDBBtn,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import Header from '../../components/header/header';

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    id:"none",
  });

  useEffect(() => {
    console.log(isVisible);
    },[isVisible]);

    const toggleDiv = (e) => {
      setIsVisible({
      id: e.target.id,
      });
      }
    
  return (
    <div>
      <Header />
      <div className="featured-services">
        <div className='featured-services-header'>
          <h1>Featured Services</h1>
          <MDBNavbarLink>
            <MDBBtn
              rounded className='mx-2' color='black'
              href='#ourservices'
            >
              All Services
            </MDBBtn>
          </MDBNavbarLink>
        </div>

          {/* Add featured service drop down here with descriptions 
          exmaple services include : basic mani, basic pedi, spa pedi, and deuluxe pedi */}
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

      <div style={{ 
            backgroundImage: "url('/images/img8.jpeg')",  
            // backgroundImage: "url('https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')",
            height: 400,
            width:"100%",
             backgroundSize: "cover",
             backgroundPosition: "center bottom" 
             }}
      ></div>

      <div className="about-us-container">
        <div className="about-us-header">
            <h1>More About our Business</h1>
        </div>

        <div className="aboutus-img1">
        <img src="/images/image1.avif" alt=""></img>
        </div>

        <div className="aboutus-sec2">
        <img src="/images/image3.avif" alt=""></img>
        <p>Our small business-owned nail salon is run by three highly skilled nail technicians with years of industry expertise. They specialize in a wide range of nail care services such as SNS, acrylic, gel, and so on.</p>
        <p>Their goal is to provide their clients with the best possible service while maintaining the highest standard of sanitization.</p>
        <p>Explore our gallery to see some of their greatest works over the years, along with those of other incredibly skilled nail technicians.</p>
        <MDBNavbarLink>
            <MDBBtn
              outline rounded className='mx-2 custom-hover' color='black'
              href='gallery'
            >
              Gallery
            </MDBBtn>
          </MDBNavbarLink>
        </div>
      </div>

       <div className="our-services-container">
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
