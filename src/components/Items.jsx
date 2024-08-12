"use client"
import { AuthContext } from '@/authContext/AuthProvider';
import React, { useContext, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



function Items() {
   const {showUnshow,setshowunshow}=useContext(AuthContext)
   const {ItemLength}=useContext(AuthContext)
   const {Sorting,setSorting} = useContext(AuthContext);
   const handleSort = (event) => {
    setSorting(event.target.value);
};

   return (<>
    
    <hr className='lg:ml-[70px] lg:mt-20 mt-24'/>
      <div className=" flex items-center lg:justify-between justify-evenly bg-white lg:py-4 lg:px-6 lg:border-b border-gray-200 lg:mt-4 lg:mb-3 lg:gap-6   lg:h-[88px] lg:m-auto lg:ml-[60px]   ">
        
      <div className='lg:flex lg:items-center lg:gap-8 '>
        <div className="lg:text-lg lg:font-semibold lg:block hidden">{ItemLength} ITEMS</div>

        <div className="lg:flex  lg:items-center  ">
          <button className="text-sm text-gray-600 mr-4 block " onClick={()=>setshowunshow(!showUnshow)}>
            {showUnshow ?
                <span className="lg:block lg:flex lg:items-center hidden font-[700] text-[16px]  ">
                <IoIosArrowBack className='lg:block hidden' />
                  HIDE FILTER
                </span>:
                <span className="lg:block lg:flex lg:items-center hidden font-[700] text-[16px]  ">
                <IoIosArrowBack className='lg:block hidden' />
                  SHOW FILTER
                </span>

            }
            
            
          </button>
          <span className='lg:hidden block font-[700] text-[#252020] text-[14px]'>
                FILTER
            </span>
          </div>
          </div>
          <div className="h-6 border-2 border-[#E5E5E5] mx-4 block lg:hidden"></div>



          <div  className=" flex items-center text-[14px] lg:text-[18px]  font-[700] text-[#252020] mt-2 mb-2">
            {/* <button className=" flex items-center text-[14px] lg:text-[18px]  font-[700] text-[#252020] mt-2 mb-2" onClick={}>
              RECOMMENDED
              <IoIosArrowDown />
           
            </button> */}
           <select className='outline-none' onChange={handleSort}>
    <option value="">RECOMMENDED</option>
    <option value="desc">PRICE: HIGH TO LOW</option>
    <option value="asc">PRICE: LOW TO HIGH</option>
</select>

            
         </div>
        
        
    </div>
    <hr className='lg:hidden block'/>
    </>
  )
}

export default Items