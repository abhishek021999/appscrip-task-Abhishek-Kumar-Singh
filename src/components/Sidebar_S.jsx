'use client'
import React, { useContext, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import '../Styles/Sidebar.css'
import { AuthContext } from '@/authContext/AuthProvider';
function Sidebar_S() {
    const [showIdealFor, setShowIdealFor] = useState(false);
    const [showOccasion, setShowOccasion] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [showFabric, setShowFabric] = useState(false);
    const [showSegment, setShowSegment] = useState(false);
    const [suitable, setsuitable] = useState(false);
    const [Raw, setRaw] = useState(false);
    const [pattern, setpattern] = useState(false);
    const {showUnshow,setshowunshow}=useContext(AuthContext)
    const {Allcategory, setCategory} = useContext(AuthContext);


       // Handler for checkbox change
       const handleCheckboxChange = (event) => {
        const { id, checked, value } = event.target;
        setCategory((prevState) => ({
            ...prevState,
            [id]: checked ? value : "", // Store the value if checked, else set it to an empty string
        }));
    };
    
    return (
        <>
        {
            showUnshow && (
                <div className="sidebar_conatiner">
                {/* Customizable Filter */}
                <div className="inputdiv">
                <input type="checkbox" id="customizable" className="input1 " />
        
                  <label htmlFor="customizable" className="customizable_label">Customizable</label>
                </div>
          
                {/* Ideal For Filter */}
                <hr />
                <div className="Ideal_For_Filter">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setShowIdealFor(!showIdealFor)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">Ideal For <br /> All</span>
                    <span>{showIdealFor ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                 
                  {showIdealFor && (
                    <div className="mt-2 ">
                      <div className="flex items-center">
                        <input type="checkbox" id="men" value={"men's clothing"} checked={Allcategory.men}
                    onChange={handleCheckboxChange} className="mr-2" />
                        <label  htmlFor="men">Men</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox"
                         id="women" 
                         value={"women's clothing"} 
                         checked={Allcategory.women}
                         onChange={handleCheckboxChange}
                         className="mr-2" />
                        <label htmlFor="women">Women</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox"
                         id="electronics" 
                         value={"electronics"} 
                         checked={Allcategory.electronics}
                         onChange={handleCheckboxChange}
                         className="mr-2" />
                        <label htmlFor="kids">electronics</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" 
                        id="jewelery"
                         value={"jewelery"}
                         checked={Allcategory.jewelery}
                         onChange={handleCheckboxChange}
                          className="mr-2" />
                        <label htmlFor="kids">jewelery</label>
                      </div>
                    </div>
                  )}
                </div>
                  <hr />
                {/* Occasion Filter */}
                <div className="mb-8 lg:mt-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setShowOccasion(!showOccasion)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">Occasion <br /> All</span>
                    <span>{showOccasion ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                  {showOccasion && (
                    <div className="mt-2">
                      {/* Add checkboxes for Occasion */}
                    </div>
                  )}
                </div>
                  <hr />
                {/* Work Filter */}
                <div className="mb-8 lg:mt-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setShowWork(!showWork)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">Work</span>
                    <span>{showWork ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                  {showWork && (
                    <div className="mt-2">
                      {/* Add checkboxes for Work */}
                    </div>
                  )}
                </div>
                  <hr />
                {/* Fabric Filter */}
                <div className="mb-8 lg:mt-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setShowFabric(!showFabric)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">Fabric <br />All</span>
                    <span>{showFabric ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                  {showFabric && (
                    <div className="mt-2">
                      {/* Add checkboxes for Fabric */}
                    </div>
                  )}
                </div>
                  <hr />
                {/* Segment Filter */}
                <div className="mb-8 lg:mt-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setShowSegment(!showSegment)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">Segment <br />All</span>
                    <span>{showSegment ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                  {showSegment && (
                    <div className="mt-2">
                      {/* Add checkboxes for Segment */}
                    </div>
                  )}
                </div>
                <hr />
                <div className="mb-8 lg:mt-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setsuitable(!suitable)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">SUITABLE FOR<br />All</span>
                    <span>{suitable ? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                  {showSegment && (
                    <div className="mt-2">
                      {/* Add checkboxes for Segment */}
                    </div>
                  )}
                </div>
                <hr />
                <div className="mb-8 lg:mt-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setRaw(!Raw)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">RAW MATERIAL<br />All</span>
                    <span>{Raw? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                  {showSegment && (
                    <div className="mt-2">
                      {/* Add checkboxes for Segment */}
                    </div>
                  )}
                </div>
                <hr />
                <div className="mb-8 lg:mt-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => setpattern(!pattern)}>
                    <span className="text-[#252020]  font-[700] text-[18px]">PATTERN<br />All</span>
                    <span>{pattern? <MdKeyboardArrowUp /> : <IoIosArrowDown />}</span>
                  </div>
                  {showSegment && (
                    <div className="mt-2">
                      {/* Add checkboxes for Segment */}
                    </div>
                  )}
                </div>
                <hr />

                
              </div>

            )
        }
     
      </>
    )
}

export default Sidebar_S