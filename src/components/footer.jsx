import React from 'react';
import { FaFlagUsa } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="lg:flex lg:justify-between border-b border-gray-600 pb-8 mb-8">
          {/* Left Side */}
          <div className="lg:w-1/2 lg:ml-[100px]">
            <h2 className="text-[20px] font-[700] mb-2">BE THE FIRST TO KNOW</h2>
            <p className="text-white font-[400] mb-4">Sign up for updates from mettä muse.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your e-mail..." 
                className="flex-grow lg:w-[584px] px-4 py-2 bg-white border-gray-600 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-gray-600  hover: bg-[#000000] px-6 py-2 text-white  font-semibold">
                SUBSCRIBE
              </button>
            </form>
          </div>
          {/* Right Side */}
          <div className="lg:w-1/2 lg:text-right mt-8 lg:mt-0 lg:mr-[150px]">
            <h2 className="text-lg font-bold mb-2">CONTACT US</h2>
            <p className="text-white font-[400]">+44 221 133 536D</p>
            <p className="text-white font-[400]">customercare@mettamuse.com</p>
            <hr className='block lg:hidden mt-5' />
            <h2 className="text-lg font-bold mt-4 mb-2">CURRENCY</h2>
            <p className="text-white font-[400] flex items-center  lg:justify-end">
              <span className="mr-2"><FaFlagUsa /></span> USD
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2">
            <div className="flex flex-col lg:flex-row mb-8 gap-24">
              {/* Left Columns */}
              <div className="mb-4 lg:mb-0 lg:mr-16 lg:ml-[100px]">
                <h3 className="font-semibold mb-4">mettā muse</h3>
                <ul className="space-y-2 text-white font-[400]">
                  <li>About Us</li>
                  <li>Stories</li>
                  <li>Artisans</li>
                  <li>Boutiques</li>
                  <li>Contact Us</li>
                  <li>EU Compliances Docs</li>
                </ul>
              </div>
              {/* Right Columns */}
              <div>
                <h3 className="font-semibold mb-4">QUICK LINKS</h3>
                <ul className="space-y-2 text-white font-[400]">
                  <li>Orders & Shipping</li>
                  <li>Join/Login as a Seller</li>
                  <li>Payment & Pricing</li>
                  <li>Return & Refunds</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:text-right lg:mr-[150px]">
            {/* Follow Us Section */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4">FOllOW US</h3>
              <ul className="flex justify-center lg:justify-end space-x-4 text-white font-[400]">
                <li><FaInstagram size={25}/></li>
                <li><CiFacebook size={25}/></li>
                <li><CiLinkedin size={25}/></li>
              </ul>
            </div>
            {/* Payment Methods */}
            <div>
              <h3 className="font-semibold mb-4">mettā muse ACCEPTS</h3>
              <ul className="flex justify-center lg:justify-end space-x-4">
                <li><img src="\gpay.png" alt="gpay" className="h-8" /></li>
                <li><img src="\applepay.png" alt="applepay" className="h-8" /></li>
                <li><img src="\amex.png" alt="amex" className="h-8" /></li>
                <li><img src="\master.png" alt="master" className="h-8" /></li>
                <li><img src="\paypal.png" alt="paypal" className="h-8" /></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-white mt-8 font-[400]">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
