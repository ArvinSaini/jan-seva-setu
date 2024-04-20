import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageCount = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
        }, 5000);

        return () => clearInterval(interval);
    }, [imageCount]);

    return (
        <div className='relative w-full h-[91%] overflow-hidden'>
            <div className='absolute top-[15%] left-[5%] z-10'>
                <h2 className='text-7xl text-white z-10' style={{ textShadow: '5px 5px 50px black, -5px -5px 50px black, -5px 5px 50px black, 5px -5px 50px black' }}>
                    Empowering Compassion: <br />
                    Bridging Communities, <br />
                    Transforming Lives
                </h2>
            </div>
            <div className='flex transition-transform duration-1000 ease-in-out' style={{ width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} className='w-full h-full object-cover' style={{ minWidth: `${100 / imageCount}%` }} />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;