import React from 'react';
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
function Navbar() {
  return (
    <div>
      {/* Top section */}
      <div className='grey-strip top-section lg:w-full h-[32px] flex lg:justify-between lg:pt-2 lg:pb-2 lg:pr-[274px] lg:pl-[274px] bg-[#000000] justify-center items-center fixed top-0 left-0 right-0 z-50'>

        <div className='w-[138px] h-[16px] flex gap-[10px]'>
          <img src="/rectangeImage.webp" alt="" />
          <p className='text-[#EB4C6B] font-normal text-[12px] w-[112px]'>Lorem ipsum dolor</p>
        </div>
        <div className='lg:w-[138px] lg:h-[16px] lg:flex lg:gap-[10px] hidden'>
          <img src="/rectangeImage.webp" className='w-[16px] h-[16px]' alt="" />
          <p className='text-[#EB4C6B] font-normal text-[12px] w-[112px]'>Lorem ipsum dolor</p>
        </div>
        <div className='lg:w-[138px] lg:h-[16px] lg:flex lg:gap-[10px] hidden'>
          <img src="/rectangeImage.webp" alt="" />
          <p className='text-[#EB4C6B] font-normal text-[12px] w-[112px]'>Lorem ipsum dolor</p>
        </div>
      </div>

      {/* Header section */}
      <div className='header lg:w-full lg:h-[188px] bg-[#FFFFFF]  fixed top-[32px] left-0 right-0 z-40'>

        <div className='middle-section w-full m-auto flex items-center justify-between mt-[25px]'>
          <div className='logo-image-left-side w-[19.89px] h-[19.91px] lg:w-[36px] lg:h-[36px] lg:ml-[96px] flex gap-[10px]'>
            <div className='hamburger-menu lg:hidden md:hidden'>
              <RxHamburgerMenu className='w-[20px] h-[20px] ml-[16px]' />
            </div>
            <img className='lg:w-[35.61px] lg:h-[35.66px]' src="/Logo.jpg" alt="Logo" />
          </div>
          <div className='logo-middle-text lg:ml-[90px] ml-[40px] h-[24px] flex items-center justify-center'>
            <h2 className='lg:text-[36px] text-[20px] font-[800]'>LOGO</h2>
          </div>
          <div className='right-side-icons-section flex items-center lg:gap-[20px] lg:mr-[30px] gap-[12px] mr-[15px]'>
            <CiSearch size={25} style={{ strokeWidth: 2 }}   className='w-[24px] h-[24px]' />
            <CiHeart size={25} style={{ strokeWidth: 2 }}  className='w-[24px] h-[24px]' />
            <FiShoppingBag size={25} style={{ strokeWidth: 2 }}   className='w-[24px] h-[24px]' />
            <CiUser size={25} style={{ strokeWidth: 2 }}  className='w-[24px] h-[24px] hidden lg:block' />
            <select className='w-[52px] border-none font-bold hidden' name="" id="">
              <option value="">Eng</option>
              <option value="">Hin</option>
              <option value="">Russ</option>
            </select>
          </div>
        </div>
        <div className='last-section lg:w-[700px] lg:mt-16 lg:h-[24px] flex items-center lg:justify-between lg:gap-[64px] lg:m-auto bottom-2 w-[343px] h-[46px] gap-[8px] text-[12px] font-[400] ml-[16px]'>
    <p className='lg:font-[700] lg:text-[20px] lg:hidden block text-[15px] text-[#BFC8CD] font-[400] relative group'>
        HOME
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </p>
    <div className="h-[15px] border-l-2 border-gray-500 lg:hidden"></div>
    <p className='lg:font-[700] lg:text-[20px] text-[15px] font-[400] relative group'>
        SHOP
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </p>
    <p className='font-[700] text-[20px] hidden lg:block relative group'>
        SKILLS
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </p>
    <p className='font-[700] text-[20px] hidden lg:block relative group'>
        STORIES
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </p>
    <p className='font-[700] text-[20px] hidden lg:block relative group'>
        ABOUT
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </p>
    <p className='font-[700] text-[20px] hidden lg:block relative group'>
        CONTACT US
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </p>
</div>



      </div>
      <hr className='mt-[-20px] hidden lg:block' />
    </div>
  );
}

export default Navbar;
