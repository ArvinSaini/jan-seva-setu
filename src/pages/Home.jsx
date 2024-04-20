import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Image1 from '../assets/ngo1.jpg';
import Image2 from '../assets/ngo2.jpg';
import Image3 from '../assets/ngo3.jpg';
import ImageCarousel from '../components/ImageSlider';

const Home = () => {
    const images = [Image1, Image2, Image3];

    return (
        <div className='flex items-start justify-center h-screen'>
            <ImageCarousel images={images} />
        </div>
    );
};

export default Home;