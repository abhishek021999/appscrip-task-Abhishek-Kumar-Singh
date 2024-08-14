"use client"
import { AuthContext } from '@/authContext/AuthProvider';
import React, { useContext, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import '../Styles/Items.css'


function Items() {
  const { showUnshow, setshowunshow } = useContext(AuthContext)
  const { ItemLength } = useContext(AuthContext)
  const { Sorting, setSorting } = useContext(AuthContext);
  const handleSort = (event) => {
    setSorting(event.target.value);
  };

  return (<>

    <hr className='Line' />
    <div className="Filter_main ">

      <div className='Items_parent'>
        <div className="Items">{ItemLength} ITEMS</div>

        <div className='mob-3'>
          <button  className="filter_drop text-lg text-gray-600 mr-4 block " onClick={() => setshowunshow(!showUnshow)}>
            {showUnshow ?
              <span className="hide_filter ">
                <IoIosArrowBack className='Arrow ' />
                HIDE FILTER
              </span> :
              <span className="show_filter  ">
                <IoIosArrowBack className='Arrow' />
                SHOW FILTER
              </span>

            }


          </button>
          <span className='Filter'>
            FILTER
          </span>
        </div>
      </div>
      <div className="h-6 border-2 border-[#E5E5E5] mx-4 block lg:hidden"></div>



      <div className="select_div">
       
        <select id='select' onChange={handleSort}>
          <option value="">RECOMMENDED</option>
          <option value="desc">PRICE: HIGH TO LOW</option>
          <option value="asc">PRICE: LOW TO HIGH</option>
        </select>


      </div>


    </div>
    <hr id='hr' />
  </>
  )
}

export default Items