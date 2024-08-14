'use client';
import { AuthContext } from '@/authContext/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import '../Styles/Products.css'
function Products() {
    const { showUnshow, ItemLength, setItem, Allcategory } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filledStates, setFilledStates] = useState({});
    const { men, women, electronics, jewelery } = Allcategory;
    const { Sorting, setSorting } = useContext(AuthContext);

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
                <div className='grid_div_3'>
                    {data.map((ele) => (
                        <div key={ele.id} className='card_for_3 '>
                            <div className='IMage_div'>
                                <img className='card3_image' src={ele.image} alt={ele.title} />
                            </div>
                            <div className='title_div'>
                                <p>{ele.title}</p>
                                <p>Sign in or create an account to see pricing</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='grid_4' >
                    {data.map((ele) => (
                        <div key={ele.id} className='card_4'>
                            <div className='IMage_div'>
                                <img className='card4_image' src={ele.image} alt={ele.title} />
                            </div>
                            <div className='title_grid4'>
                                <div className='flex'>
                                    <p className='lg:font-[800] lg:text-[18px] text-[14px] font-[700]'>{ele.title}</p>
                                    <div className='heart_icon'>
                                        <CiHeart style={{ strokeWidth: 2 }}
                                            
                                        />
                                    </div>
                                </div>
                                <p className='signIN'><span className='signIN_und'>Sign in</span> or create an account to see pricing</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Products;
