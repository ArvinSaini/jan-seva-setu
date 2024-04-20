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
                <div className='relative w-1/2 h-[200px] bg-cyan-700'>
                    <div className='absolute z-10 top-[15%] left-[5%] '>
                        <h2 className='text-2xl text-white'>
                            People in need of humanatarian aid are many, <br />
                            From the homeless to the orphans, there are <br />
                            many who go unnoticed even if many organisations<br />
                            do their best to reach them.
                        </h2>
                    </div>
                </div>
                <div className='relative w-1/2 h-[200px]'>
                    <div className='absolute z-10 top-[15%] left-[25%] '>
                        <h2 className='w-full text-2xl text-center text-black'>
                            Are you willing to extend a hand? <br />
                            Donate Now! <br />
                        <Button>Go To Donate</Button>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;