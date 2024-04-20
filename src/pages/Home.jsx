import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Image1 from '../assets/ngo1.jpg';
import Image2 from '../assets/ngo2.jpg';
import Image3 from '../assets/ngo3.jpg';
import ImageCarousel from '../components/ImageSlider';

const Home = () => {
    const images = [Image1, Image2, Image3];

    return (
        <>
            <div className='flex items-start justify-center h-[611px]'>
                <ImageCarousel images={images} />
            </div>
            <div className='flex flex-row'>
                <div className='w-1/2 h-[200px] bg-blue-300'>
                    para1
                </div>
                <div className='w-1/2 h-[200px]'>
                    para2
                </div>
            </div>
        </>
    );
};

export default Home;