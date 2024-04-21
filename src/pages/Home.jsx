import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Image1 from '../assets/ngo1.jpg';
import Image2 from '../assets/ngo2.jpg';
import Image3 from '../assets/ngo3.jpg';
import ImageCarousel from '../components/ImageSlider';
import TextField from '../components/TextField';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
    const images = [Image1, Image2, Image3];
    const { feedback } = useAuth();
    const [message, setMessage] = useState();
    return (
        <div className='mb-8'>
            <div className='flex items-start justify-center h-[611px]'>
                <ImageCarousel images={images} />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div className='relative w-1/2 h-[200px] bg-cyan-700'>
                        <div className='absolute z-10 top-[15%] left-[5%] '>
                            <h2 className='text-2xl text-white'>
                                People in need of humanitarian aid are many, <br />
                                From the homeless to the orphans, there are <br />
                                many who go unnoticed even if many organizations <br />
                                do their best to reach them.
                            </h2>
                        </div>
                    </div>
                    <div className='relative w-1/2 h-[200px]'>
                        <div className='absolute z-10 top-[15%] left-[20%] '>
                            <h2 className='mt-4 w-full text-2xl text-center text-black'>
                                Are you willing to extend a hand? <br />
                                <Link to="/donate">
                                    <Button className='mt-5'>Donate Now!</Button>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='relative w-1/2 h-[200px]'>
                        <div className='absolute z-10 top-[15%] left-[25%] '>
                            <h2 className='w-full text-2xl text-center justify-center text-black'>
                                Have a question about our service?<br />
                                <Link to="/faq">
                                    <Button className='mt-5'>Frequently Asked Questions</Button>
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className='relative w-1/2 h-[200px] bg-cyan-700'>
                        <div className='absolute z-10 top-[15%] left-[25%] '>
                            <h2 className='w-full text-2xl text-center justify-center text-white'>
                                Any Feedback for us?<br />
                                <TextField id="feedback" onChange={(e) => setMessage(e.target.value)} className='w-[100%] mt-5 text-black' />
                                <Button onClick={() => {
                                    feedback({
                                        message
                                    });
                                    document.getElementById('feedback').value = '';
                                }} className='py-1 px-2 mt-2'>Submit</Button>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;