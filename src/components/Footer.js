import React from 'react'
import { BsGeoAlt } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <div className='main'>
      <div className='w-1140'>
      <div className='flex ontainer flex-wrap'>
        <div className='www mt-5 col-lg-3 col-md-6 col-sm-12 col-12 '>
          <ul>
            <li className='mt-2'>Our Contacts</li>
            <li className='mt-2'>+91 8238844087</li>
            <li className='mt-2'>Mon - Fri: 10:00 - 18:00</li>
            <li className='mt-2'>support@husire.com</li>

          </ul>
        </div>
        <div className='www mt-5 col-lg-3 col-md-6 col-sm-12 col-12'>
          <ul>
            <li className='mt-2'>Information</li>
            <li className='mt-2'>About Us</li>
            <li className='mt-2'>Contact Us</li>
            <li className='mt-2'>Privacy Policy</li>
            <li className='mt-2'>Refund And Returns Policy</li>
            <li className='mt-2'>Terms of Service</li>
            <li className='mt-2'>Track Order</li>
            <li className='mt-2'>Refund Policy</li>
          </ul>
        </div>
        <div className='www mt-5 col-lg-3 col-md-6 col-sm-12 col-12'>
        <ul>
            <li className='mt-2'>Our Mission</li>
            <li className='mt-2'>Husire Fashion is an innovative fashion <br></br>company. We make unique scrunchies<br></br>, watch, and earrings that you’ll love to<br></br> wear. With our tagline of “Everything you<br></br> desire,” we strive to create products that <br></br>will help you achieve your goals and<br></br> dreams.</li>
            
          </ul>
        </div>

      </div>
      </div><br></br>
      <div className='icin'><center><BsGeoAlt/>&nbsp;&nbsp;&nbsp;&nbsp;< BsWhatsapp/></center>
      
      </div>
       <div className='main2'>
        <h3>© 2023, Husirefashion Powered by Shopify</h3></div> 
    </div>
       
  </>
  )
};

export default Footer