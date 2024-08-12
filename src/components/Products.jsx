'use client';
import { AuthContext } from '@/authContext/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";

function Products() {
    const { showUnshow, ItemLength, setItem, Allcategory } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filledStates, setFilledStates] = useState({});
    const { men, women, electronics, jewelery } = Allcategory;
    const {Sorting, setSorting} = useContext(AuthContext);

    // Construct the URL based on selected categories
    const selectedCategories = [men, women, electronics, jewelery].filter(Boolean).join(',');

    useEffect(() => {
        // Fetch data when the component mounts or when categories change
        const fetchData = async () => {
            try {
                const url = selectedCategories
                    ? `https://fakestoreapi.com/products/category/${selectedCategories}?sort=${Sorting}`
                    : `https://fakestoreapi.com/products/?sort=${Sorting}`;
                
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
                setItem(result.length);  // Set the item length based on fetched data

                // Initialize filledStates with false for each product
                const initialFilledStates = {};
                result.forEach(product => {
                    initialFilledStates[product.id] = false;
                });
                setFilledStates(initialFilledStates);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCategories, setItem, Sorting]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleClick = (id) => {
        setFilledStates(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            {showUnshow ? (
                <div className=' lg:w-[940px] lg:grid lg:grid-cols-3 grid grid-cols-1 gap-3 gap-x-3 lg:pr-6 m-auto '>
                    {data.map((ele) => (
                        <div key={ele.id} className='shadow-2xl lg:w-[330px] lg:h-[462px] w-[168px] h-[227px] m-auto '>
                            <div className='IMage_div'>
                                <img className='lg:w-[300px] lg:h-[320px] w-[168px] h-[224px]' src={ele.image} alt={ele.title} />
                            </div>
                            <div className='lg:w-[300px] lg:h-[50px] lg:px-[5px] lg:mt-4 w-[168px] h-[45px] px-[5px] mt-4'>
                                <p className='lg:font-[800] lg:text-[18px] text-[14px] font-[700]'>{ele.title}</p>
                                <p className='font-[400] lg:text-[14px] text-[10px]'>Sign in or create an account to see pricing</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className=' lg:w-[93%] lg:m-auto lg:mr-[30px] lg:grid lg:grid-cols-4 grid grid-cols-2 lg:gap-y-3 gap-x-3 gap-y-3   px-[10px] m-auto mt-2 lg:mb-20' >
                    {data.map((ele) => (
                        <div key={ele.id} className=' shadow-2xl lg:w-[366px] lg:h-[500px] w-[168px] h-[380px]'>
                            <div className='IMage_div'>
                                <img className=' lg:text-center lg:w-[340px] lg:h-[320px] w-[168px] h-[200px]' src={ele.image} alt={ele.title} />
                            </div>
                            <div className='lg:w-[300px] lg:h-[50px] lg:px-[5px] lg:mt-4 w-[168px] h-[45px] px-[5px] mt-4'>
                                <div className='flex'>
                                    <p className='lg:font-[800] lg:text-[18px] text-[14px] font-[700]'>{ele.title}</p> 
                                    <div  onClick={() => handleClick(ele.id)}>
                                        <CiHeart style={{ strokeWidth: 2 }}
                                            className={`w-6 h-6 cursor-pointer font-[800] text-right ${filledStates[ele.id]  ? 'text-red-500' : 'text-gray-500'}`}
                                        />
                                    </div>
                                </div>
                                <p className='font-[400] lg:text-[14px] text-[10px]'><span className='underline'>Sign in</span> or create an account to see pricing</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Products;
