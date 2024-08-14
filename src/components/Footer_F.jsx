import React from 'react';

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import '../Styles/Footer_F.css'
import { FaFlagUsa } from "react-icons/fa";
const Footer_F = () => {
  return (
    <footer className="footer_conatiner">
        <div className='upper_part'>
            <div className="left_side">
                <h1>BE THE FIRST TO KNOW </h1>
                <p className='mob_2'>Sign up for updates from mettā muse.</p>
                <p className='mobile_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                <div className='input_div'>
                  <input type="text" />
                  <button>SUBCRIBE</button>
                </div>
                <hr className='lg:hidden block w-[90%] ' />

            </div>
            <div className="right_side">
              <h1>CONTACT US</h1>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
              <h1>Currency</h1>
              <div className='flag'><FaFlagUsa /><p>USD </p></div>
              <p id='trans'>Transactions will be completed in Euros and a currency reference is available on hover.</p>

            </div>
        </div>
        <hr className='hr_divder' />

        <div className="lower_part">
            <div className="part1">
              <h1>mettā muse</h1>
              <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
              </ul>
            </div>
            <hr className='lg:hidden block w-[100%] ' />
            <div className="part1">
              <h1>Quick Links </h1>
              <ul>
              <li>Orders & Shipping </li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              </ul>
            </div>
            <hr className='lg:hidden block w-[100%] ' />
            <div className="part3">
              <h1>FOLLOW US</h1>
              <div className='social_icon'><span><FaInstagram size={25}/></span><span><CiLinkedin size={25}/></span></div>
              <hr className='lg:hidden block w-[100%] mb-4' />
              <h1>mettā muse Accepts</h1>
              <div className='payment_img'>
                <img src="/gpay.png" alt="gpay" />
                <img src="/master.png" alt="master" />
                <img src="/paypal.png" alt="paypal" />
                <img src="/amex.png" alt="amex" />
                <img src="/applepay.png" alt="applepay" />
              </div>
            </div>

        </div>
        <p id='copywright'>Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
};

export default Footer_F;
