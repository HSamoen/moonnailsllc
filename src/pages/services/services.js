import React from 'react'
import './services.css'


const Services = () => {
    
    return (
        <div className='service-menu-container'>
            <div className="bg-img1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')"}}></div>

            <h1>Service Menu</h1>

            {/* Add category dropdown for each service menu */}

            <div className="service-menu">
               
                <div className="manicures">
                    <a href="#mani">Manicures</a>
                    <p>+ Basic Manicure</p>
                    <p>+ Spa Manicure</p>
                    <p>+ Gel Manicure</p>
                    <p>+ SNS Manicure</p>
                </div>

                <div className="pedicures">
                    <a href="#pedi-treatments">Pedicures</a>
                    <p>+ Basic Pedicure</p>
                    <p>+ Spa Pedicure</p>
                    <p>+ Deluxe Pedicure</p>
                    <p>+ Jelly and Hot Stone Pedicure</p>
                </div>

                <div className="fullsets">
                    <h3>Full Sets and Fill-Ins</h3>
                    <p>+ Full Set Acrylic</p>
                    <p>+ Full Set Acrylic w/ Gel Polish</p>
                    <p>+ Full Set Solar Pink and White</p>
                    <p>+ Full Set SNS </p>
                    <p>+ Refill Acrylic</p>
                    <p>+ Refill Acrylic w/ Gel</p>
                </div>

                <div className="polish-changes">
                    <h3>Polish Changes</h3>
                    <p>+ Nail Gel Polish</p>
                    <p>+ Toes Gel polish</p>
                    <p>+ Regular Color Nails</p>
                    <p>+ Regular Color Toes</p>
                </div>

                <div className='waxing'>
                    <h3>Wax/ Hair Removal</h3>
                    <p>+ Eyebrow</p>
                    <p>+ Lip</p>
                    <p>+ Chin</p>
                    <p>+ Cheek</p>
                    <p>+ Full Face</p>
                    <p>+ Under-arm</p>
                    <p>+ Half Legs</p>
                    <p>+ Full Legs</p>
                </div>

                <div className='kids menu'>
                    <h3>Kids Menu</h3>
                    <h5>(9yrs and below)</h5>

                    <p>+ Kids Pedicure</p>
                    <p>+ Kids Manicure</p>
                    <p>+ Kids Polish Toes</p>
                    <p>+ Kids Polish Hands</p>
                </div>
            </div>

           <div className='service-info'>
           {/* <div className='bg-img2' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598104358204-87cefc7c5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3009&q=80')"}}></div> */}
           <div className='bg-img2' style={{ backgroundImage: "url('/images/nailservice.webp')"}}></div>


                <div id="mani">
                    <h1>-----------------------------Manicure-----------------------------</h1>
                    <h2>Basic Manicure</h2>
                    <p>Includes the basic cleaning of nails with cuticles trimmed, nails shaping, massage and choice of polish</p>
                </div>

                <div id='pedi-treatments'>
                    <h1>---------------------Pedicure Treatments---------------------</h1>
                    <div className='pedi-services'>
                        <div className='pedi-service'>
                            <h2>Basic Pedicure</h2>
                            <p>Includes the basic cleaning of toe nails with cuticles trimmed, nails shaping, light exfoliation, massage and choice of polish</p>
                        </div>

                        <div className='pedi-service'>
                            <h2>Spa Pedicure</h2>
                            <p>Includes all features of the basic pedicure with lavender mask, hot towels, intense massage followed with a warm paraffin treatment</p>
                        </div>
                            
                        <div className='pedi-service'>
                            <h2>Deluxe Pedicure</h2>
                            <h5>(in a box)</h5>
                            <p>All our scented delux pedicures include everything you can imagine in a pedicure. A scented mico-exfoliation sugar scrub of your choosing to exfoliate your skin and masque is applied to gently tighten back up the skin. All followed by a relaxing massage and legs wrapped in hot towels. The pedicure is finished off with warm paraffin treatment</p>

                            <h5>Scents</h5>
                            <p>+ Lemon</p>
                            <p>+ Green Tea</p>
                            <p>+ Orange</p>
                            <p>+ Mango</p>
                            <p>+ Lavender</p>
                            <p>+ Rose</p>
                        </div>

                        <div className='pedi-service'>
                            <h2>Jelly and Hot Stone Pedicure</h2>
                            <p>Includes all the Spa Pedicure but with a touch of playfulness. The foot bath is filled with translucent fluffy jelly instead of water. The jelly can feel soothing on sun soaked skin or retains heat during the winter months. The pedicure is finished with hot stone massage</p>
                        </div>
                     </div>
                </div>

                <div className='complimentary'> 
                    <h1>------------------------Complimentary------------------------</h1>
                    <p>+ Water</p>
                    <p>+ Coke</p>
                    <p>+ Red Wine</p>
                    <p>+ White Wine</p>
                </div>
             </div>

        </div>
    )
}

export default Services;