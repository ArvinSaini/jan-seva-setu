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
        <div className='relative w-full h-[100%] overflow-hidden'>
            <div className='absolute top-[15%] left-[5%] z-10'>
                <h2 className='text-7xl text-white z-10' style={{ textShadow: '5px 5px 50px black, -5px -5px 50px black, -5px 5px 50px black, 5px -5px 50px black' }}>
                    Empowering Compassion: <br />
                    Bridging Communities, <br />
                    Transforming Lives
                </h2>
                <br />
                <h3 className='pt-20 text-xl text-white z-10' style={{ textShadow: '5px 5px 40px black, -5px -5px 40px black, -5px 5px 40px black, 5px -5px 40px black' }}>
                    We are a passionate team of innovators driven by the vision of leveraging technology for social good. <br />
                    With a commitment to open innovation and community empowerment, we come together to create Jan-seva-setu, <br />
                    a platform aimed at fostering connections between NGOs and individuals in need. <br />
                    Our shared dedication fuels our mission to bridge gap between the common man and those in need.
                </h3>

            </div>
            <div className='flex transition-transform duration-1000 ease-in-out' style={{ width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} className='w-full object-fill' style={{ minWidth: `${100 / imageCount}%` }} />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;