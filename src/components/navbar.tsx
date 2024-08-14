import React from 'react';
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import '../Styles/navbar.css'
function Navbar() {
  return (
    
    <div className='head'>
      {/* Top section */}
      <div className='main-container'>

        <div className='Image_div'>
          <img src="/rectangeImage.webp" alt="" />
          <p className='Lorem_text'>Lorem ipsum dolor</p>
        </div>
        <div className='Image_div Image_div_hidden '>
          <img src="/rectangeImage.webp" alt="" />
          <p className='Lorem_text'>Lorem ipsum dolor</p>
        </div>
        <div className='Image_div Image_div_hidden '>
          <img src="/rectangeImage.webp" alt="" />
          <p className='Lorem_text'>Lorem ipsum dolor</p>
        </div>
      </div>

      {/* Header section */}
      <div className='Header_main'>

        <div className='middle-section'>
          <div className='logo-image-left-side '>
            <div className='hamburger-menu '>
              <RxHamburgerMenu size={25} style={{ strokeWidth: 1}}  className='ham_icon' />
            </div>
            <img className='logo ' src="/Logo.jpg" alt="Logo" />
          </div>
          <div className='logo-middle-text'>
            <h2 className='logo_text'>LOGO</h2>
          </div>
          <div className='right-side-icons-section'>
            <CiSearch size={25} style={{ strokeWidth: 2 }}/>
            <CiHeart size={25} style={{ strokeWidth: 2 }}/>
            <FiShoppingBag size={25} style={{ strokeWidth: 2 }}/>
            <CiUser  size={25} style={{ strokeWidth: 2 }}  className='hide' />
            <select  className='lan_select hide' name="" id="">
              <option value="">Eng</option>
              <option value="">Hin</option>
              <option value="">Russ</option>
            </select>
          </div>
        </div>


      <hr className='lg:hidden block'/>
        <div className='last-section'>
    <p className='home_text'>
        HOME
        <span className="home_span group"></span>
    </p>
    <div className="h-[15px] border-l-2 border-gray-500 lg:hidden block"></div>
    <p className='shop_text group'>
        SHOP
        <span className=" shop_span hide"></span>
    </p>
    <p className='skill_text group hide'>
        SKILLS
        <span className="skill_span hide"></span>
    </p>
    <p className='stories_text group hide'>
        STORIES
        <span className="stories_span hide"></span>
    </p>
    <p className='about_text group hide'>
        ABOUT
        <span className="about_span hide"></span>
    </p>
    <p className='contact_text group hide'>
        CONTACT US
        <span className="contact_span hide"></span>
    </p>
</div>



      </div>
      
    </div>
  );
}

export default Navbar;
