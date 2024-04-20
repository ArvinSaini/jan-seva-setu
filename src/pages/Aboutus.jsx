import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image1 from '../assets/dhrv.jpg';
import Image2 from '../assets/skshm.jpg';
import Image3 from '../assets/jvnt.jpg';
import Image4 from '../assets/rvn.jpg';
import Image5 from '../assets/ujjwl.jpg';

const Aboutus = () => {
    return (
            <div className="about text-center bg-white rounded-lg shadow-lg p-3">
                <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
                <h2 className="text-2xl">Made with love by:</h2> <br/>
                <div className="details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="member bg-white rounded-lg shadow p-6 text-secondary">
                        <h3 className="text-lg font-bold mb-4">Dhruv Goyal</h3>
                        <img src={Image1} alt="Dhruv Goyal" />
                        <div className="social-icons">
                            <a href="https://www.instagram.com/dhruvgoyal" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/dhruvgoyal" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/dhruvgoyal" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="member bg-white rounded-lg shadow p-6 text-secondary">
                        <h3 className="text-lg font-bold mb-4">Sakshham Bhagat</h3>
                        <img src={Image2} alt="Sakshham Bhagat" />
                        <div className="social-icons">
                            <a href="https://www.instagram.com/iamsakshham_28/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/sakshhamthecoder/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/SakshhamTheCoder" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="member bg-white rounded-lg shadow p-6 text-secondary">
                        <h3 className="text-lg font-bold mb-4">Jeevant Verma</h3>
                        <img src={Image3} alt="Jeevant Verma" />
                        <div className="social-icons">
                            <a href="https://www.instagram.com/g1t_17/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/jeevant-verma-8a7096297/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/JeevantVerma" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="member bg-white rounded-lg shadow p-6 text-secondary">
                        <h3 className="text-lg font-bold mb-4">Arvin Saini</h3>
                        <img src={Image4} alt="Arvin Saini" />
                        <div className="social-icons">
                            <a href="https://www.instagram.com/arvinsaini23/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/arvin-saini-141589288/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/ArvinSaini" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="member bg-white rounded-lg shadow p-6 text-secondary">
                        <h3 className="text-lg font-bold mb-4">Ujjwal Dalal</h3>
                        <img src={Image5} alt="Ujjwal Dalal" />
                        <div className="social-icons">
                            <a href="https://www.instagram.com/ujjwaldalal0007/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/ujjwal-dalal-684566297/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/ujjwaldalal7" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-10 pl-2 pr-2 pt-2 text-black' icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
                <p className='pt-3'>You may check us out at our social media handles!</p>
            </div>
    );
}

export default Aboutus;