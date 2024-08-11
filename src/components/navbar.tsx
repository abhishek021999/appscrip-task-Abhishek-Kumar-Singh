import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link'
function navbar() {
  return (
    <div>
    <div className=' grey Strip top-section lg:w-full h-[32px] flex lg:justify-between lg:pt-2 lg:pb-2 lg:pr-[274px] lg:pl-[274px] bg-[#000000] justify-center items-center'>

       <div className='w-[138px] h-[16px] flex gap-[10px] '>
           <img src="\rectangeImage.webp" alt="" />
           <p className='text-[#EB4C6B] font-normal text-[12px] w-[112px] '>Lorem ipsum dolor</p>
       </div>
       <div className='lg:w-[138px] lg:h-[16px] lg:flex lg:gap-[10px] hidden  '>
           <img src="\rectangeImage.webp" className='w-[16px] h-[16px]' alt="" />
           <p className='text-[#EB4C6B] font-normal text-[12px] w-[112px] '>Lorem ipsum dolor</p>
       </div>
       <div className='lg:w-[138px] lg:h-[16px] lg:flex lg:gap-[10px] hidden'>
           <img src="\rectangeImage.webp" alt="" />
           <p className='text-[#EB4C6B] font-normal text-[12px] w-[112px] '>Lorem ipsum dolor</p>
       </div>
    </div>

    <div className='Header lg:w-full lg:h-[188px] bg-[#FFFFFF] -2'>


        <div className='middle-section w-full m-auto flex items-center justify-between  mt-[25px]'>


            <div className='logo_Image_left_side w-[19.89px] h-[19.91px] lg:w-[36px] lg:h-[36px] lg:ml-[96px] flex gap-[10px] '>
            <div className='hamburger_menu lg:hidden md:hidden '><RxHamburgerMenu className=' w-[20px] h-[20px] ml-[16px] ' /></div>
                
                <img className='lg:w-[35.61px] lg:h-[35.66px]' src="\Logo.jpg" alt="Logo" /></div>
            <div className='logo_middle_text  lg:ml-[90px] ml-[40px] h-[24px] flex items-center justify-center '><h2 className='lg:text-[36px] text-[20px] font-[800]'>LOGO</h2></div>

            <div className='right_side_Icons_section flex items-center lg:gap-[20px] lg:mr-[30px] gap-[12px] mr-[15px]'>
            <CiSearch className='w-[24px] h-[24px]'  />
            <CiHeart className='w-[24px] h-[24px]' />
            <IoBagRemoveOutline className='w-[24px] h-[24px]' />
            <CiUser className='w-[24px] h-[24px] hidden lg:block'  />
            
            <select className='w-[52px] border-none font-bold hidden' name="" id="">
                <option value="">Eng</option>
                <option value="">Hin</option>
                <option value="">Russ</option>
            </select>
            </div>
        </div>
        <hr className='block lg:hidden mt-[20px]' />
        <div className='last_section lg:w-[700px]  lg:mt-16 lg:h-[24px] flex items-center lg:justify-between lg:gap-[64px] lg:m-auto bottom-2 w-[343px] h-[46px] gap-[8px] text-[12px] font-[400] ml-[16px] '>
                <p className='lg:font-[700] lg:text-[20px] lg:hidden block text-[15px] text-[#BFC8CD] font-[400]' >HOME</p>
                <div className="h-[15px] border-l-2 border-gray-500 lg:hidden"></div>

                <p className='lg:font-[700] lg:text-[20px] text-[15px] font-[400]' >SHOP</p>
                <p className='font-[700] text-[20px] hidden lg:block' >SKILLS</p>
                <p className='font-[700] text-[20px] hidden lg:block' >STORIES</p>
                <p className='font-[700] text-[20px] hidden lg:block' >ABOUT</p>
                <p className='font-[700] text-[20px] hidden lg:block' >CONTACT US</p>
        </div>

    </div>
    <hr className='mt-[-20px]  hidden lg:block'/>
    </div>
  )
}

export default navbar