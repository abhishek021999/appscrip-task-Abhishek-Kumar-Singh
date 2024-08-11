'use client';
import { AuthContext } from '@/authContext/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

function Products() {
    const { showUnshow, ItemLength, setItem, Allcategory } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { men, women, electronics, jewelery } = Allcategory;
    const {Sorting,setSorting} = useContext(AuthContext);

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
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCategories, setItem,Sorting]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {showUnshow ? (
                <div className='lg:w-[940px] lg:grid lg:grid-cols-3 grid grid-cols-1 gap-20 lg:pr-6 '>
                    {data.map((ele) => (
                        <div key={ele.id} className='lg:w-[230px] lg:h-[462px] w-[168px] h-[227px]'>
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
                <div className='lg:w-[93%] lg:m-auto lg:mr-[30px] lg:grid lg:grid-cols-4 grid grid-cols-2 gap-y-32 gap-x-4 px-[10px]'>
                    {data.map((ele) => (
                        <div key={ele.id} className='lg:w-[300px] lg:h-[462px] w-[168px] h-[227px]'>
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
            )}
        </>
    );
}

export default Products;
